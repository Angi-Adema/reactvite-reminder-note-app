const mongoose = require("mongoose")
const { Schema, Types } = require("mongoose")

const noteSchema = new Schema(
  {
    noteTitle: {
      type: String,
      required: true,
      maxlength: 50,
    },
    noteBody: {
      type: String,
      required: true,
      maxlength: 500,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
)

const Note = mongoose.model("Note", noteSchema)

module.exports = Note
