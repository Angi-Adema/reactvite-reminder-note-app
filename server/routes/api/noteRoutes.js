const router = require("express").Router()
const { authMiddleware } = require("../../utils/auth")

const {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../../controllers/noteController")

router.route("/").get(getNotes).post(authMiddleware, createNote)

router.route("/:noteId").get(getSingleNote).put(updateNote).delete(deleteNote)

module.exports = router
