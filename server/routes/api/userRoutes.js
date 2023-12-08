const router = require("express").Router()

const {
  getUsers,
  getSingleUser,
  getUserNotes,
  createUser,
  deleteUser,
} = require("../../controllers/userController")

router.route("/").get(getUsers).post(createUser)

router.route("/:userId/notes").get(getUserNotes)

router.route("/:userId").get(getSingleUser).delete(deleteUser)

module.exports = router
