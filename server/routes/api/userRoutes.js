const router = require("express").Router()

const {
  getUsers,
  getSingleUser,
  getUserNotes,
  createUser,
  deleteUser,
} = require("../../controllers/userController")

router.route("/").get(getUsers).post(createUser)

router.route("/:userId").get(getSingleUser).get(getUserNotes).delete(deleteUser)

module.exports = router
