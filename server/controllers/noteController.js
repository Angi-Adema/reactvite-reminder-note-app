const { Note, User } = require("../models")

module.exports = {
  getNotes(req, res) {
    Note.find()
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err))
  },
  getSingleNote(req, res) {
    Note.findOne({ _id: req.params.noteId })
      .then((note) =>
        !note
          ? res.status(404).json({ message: "No note with this ID!" })
          : res.json(note)
      )
      .catch((err) => res.status(500).json(err))
  },
  createNote({ user, body }, res) {
    Note.create(body)
      .then((note) => {
        return User.findOneAndUpdate(
          { _id: user._id },
          { $addToSet: { notes: note._id } },
          { new: true }
        )
      })
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Note created, however no user with this ID!" })
          : res.json("Note successfully created!")
      )
      .catch((err) => {
        console.error(err)
        res.status(500).json(err)
      })
  },
  updateNote(req, res) {
    Note.findOneAndUpdate(
      { _id: req.params.noteId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((note) =>
        !note
          ? res.status(404).json({ message: "No note with this ID!" })
          : res.json(note)
      )
      .catch((err) => {
        console.log(err)
        res.status(500).json(err)
      })
  },
  deleteNote(req, res) {
    Note.findOneAndDelete({ _id: req.params.noteId })
      .then((note) =>
        !note
          ? res.status(404).json({ message: "No note with this ID!" })
          : User.findOneAndUpdate(
              { notes: req.params.noteId },
              { $pull: { notes: req.params.noteId } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res
              .status(404)
              .json({ message: "Note created, however no user with this ID!" })
          : res.json({ message: "Note successfully deleted!" })
      )
      .catch((err) => res.status(500).json(err))
  },
}
