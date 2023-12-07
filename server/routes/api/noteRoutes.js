const router = require("express").Router()

const {
  getNotes,
  getSingleNote,
  createNote,
  updateNote,
  deleteNote,
} = require("../../controllers/noteController")

router.route("/").get(getNotes).post(createNote)

router.route("/:noteId").get(getSingleNote).put(updateNote).delete(deleteNote)

module.exports = router
