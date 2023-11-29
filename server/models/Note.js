const { Schema, Types } = require("mongoose")

const noteSchema = new Schema(
  {
    noteId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
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

module.exports = noteSchema
