const router = require("express").Router()

const {
  getNotes,
  createNote,
  //   updateNote,
  //   deleteNote,
} = require("../../controllers/noteController")

router.route("/").get(getNotes).post(createNote)

// router.route("/:noteId").put(updateNote).delete(deleteNote)

module.exports = router
