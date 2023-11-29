const { Note } = require("../models")

module.exports = {
  getNotes(req, res) {
    Note.find()
      .then((notes) => res.json(notes))
      .catch((err) => res.status(500).json(err))
    console.log(notes)
  },

  //   createNote(req, res) {
  //     Note.create(req.body)
  //       .then((dbNoteData) => res.json(dbNoteData))
  //       .catch((err) => res.status(500).json(err))
  //   },
  //   updateNote(req, res) {
  //     Note.findOneAndUpdate(
  //       { _id: req.params.noteId },
  //       { $set: req.body },
  //       { runValidators: true, new: true }
  //     )
  //       .then((note) =>
  //         !note
  //           ? res.status(404).json({ message: "No note with this ID!" })
  //           : res.json(note)
  //       )
  //       .catch((err) => {
  //         console.log(err)
  //         res.status(500).json(err)
  //       })
  //   },
  //   deleteNote(req, res) {
  //     Note.findOneAndRemove({ _id: req.params.noteId })
  //     .then((note) =>
  //     !note
  //     ? res.status(404).json({ message: 'No note with this ID!' })
  //     : )
  //   },
}
