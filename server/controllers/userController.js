const { User, Note } = require("../models")
const { signToken } = require("../utils/auth")

module.exports = {
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err))
  },
  getUserNotes(req, res) {
    User.findById(req.params.userId)
      .populate("notes")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user with this ID!" })
          : res.json(user.notes)
      )
      .catch((err) => res.status(500).json(err))
  },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select("-__v")
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID!" })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err))
  },
  login(req, res) {
    User.findOne({ email: req.body.email })
      .then((res) => {
        if (!res) {
          return res.status(400).json({ message: "user not found" })
        }
        return res.isCorrectPassword(req.body.password)
      })
      .then((user) => {
        if (!user) {
          return res.status(400).json({ message: "user not found" })
        }

        const token = signToken(user)
        res.json({ user, token })
      })
      .catch((err) => {
        console.log(err)
      })
  },
  createUser(req, res) {
    User.create(req.body)
      .then((user) => {
        const token = signToken(user)
        res.json({ user, token })
        console.log({ user, token })
      })
      .catch((err) => res.status(500).json(err))
  },
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json({ message: "No user found with this ID!" })
          : Note.deleteMany({ _id: { $in: user.notes } })
      )
      .then(() =>
        res.json({ message: "User and associated notes have been deleted!" })
      )
      .catch((err) => res.status(500).json(err))
  },
}
