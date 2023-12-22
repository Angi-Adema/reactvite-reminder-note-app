const router = require("express").Router()
const { authMiddleware } = require("../../utils/auth")

const {
  getUsers,
  getSingleUser,
  getUserNotes,
  createUser,
  deleteUser,
  login,
} = require("../../controllers/userController")

router.route("/").get(getUsers).post(createUser)

router.route("/login").post(login)

router.route("/user").get(authMiddleware, getUserNotes)

// router.route("/:userId").get(getSingleUser).delete(deleteUser)

module.exports = router
