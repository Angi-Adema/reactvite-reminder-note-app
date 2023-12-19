import { useEffect, useState } from "react"
import { getAllNotes, deleteNote, addNote, editNote } from "../../utils/API"

export default function Notes() {
  const [noteContent, setNoteContent] = useState({
    noteTitle: "",
    noteBody: "",
  })
  const [selectedNote, setSelectedNote] = useState(false)
  const [notes, setNotes] = useState([])
  const [savedId, setSavedId] = useState("")

  useEffect(() => {
    const noteData = async () => {
      const response = await getAllNotes()

      const data = await response.json()

      setNotes(data)
    }

    noteData()
  }, [notes])

  const handleChange = (e) => {
    const { name, value } = e.target
    setNoteContent({ ...noteContent, [name]: value })
  }

  const handleSubmitNote = async (e) => {
    e.preventDefault()

    try {
      const response = await addNote(noteContent)
      if (!response.ok) {
        throw new Error("something wrong")
      }

      setNoteContent({
        noteTitle: "",
        noteBody: "",
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleNoteClick = (note) => {
    setSelectedNote(true)
    setNoteContent({
      noteTitle: note.noteTitle,
      noteBody: note.noteBody,
    })
    setSavedId(note._id)
  }

  const handleEditNote = async (e) => {
    e.preventDefault()

    try {
      const response = await editNote(savedId, noteContent)

      if (!response.ok) {
        throw new Error("something wrong")
      }

      setSelectedNote(false)
      setNoteContent({
        noteTitle: "",
        noteBody: "",
      })
    } catch (err) {
      console.log(err)
    }
  }

  const handleCancel = () => {
    setSelectedNote(false)
    setNoteContent({
      noteTitle: "",
      noteBody: "",
    })
  }

  const handleDelete = async (noteId) => {
    try {
      const del = await deleteNote(noteId)
      setSelectedNote(false)
      setNoteContent({
        noteTitle: "",
        noteBody: "",
      })
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div
      className="main-container"
      style={{ marginLeft: "1rem", marginTop: "-3rem" }}
    >
      <form
        className="form"
        onSubmit={(e) =>
          selectedNote ? handleEditNote(e) : handleSubmitNote(e)
        }
      >
        <input
          value={noteContent.noteTitle}
          name="noteTitle"
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <textarea
          value={noteContent.noteBody}
          onChange={handleChange}
          name="noteBody"
          placeholder="Enter Note"
          rows={15}
          required
        />

        {selectedNote ? (
          <div className="edit-button">
            <button type="submit">Save</button>
            <button type="submit" onClick={handleCancel}>
              Cancel
            </button>
          </div>
        ) : (
          <button type="submit">Save Note</button>
        )}
        <p>
          <h7>
            *To edit a note just click on the note and make changes in the
            editor!
          </h7>
        </p>
      </form>
      <div className="notes-grid">
        {notes?.map((note, i) => (
          <div
            key={i}
            className="note-item"
            onClick={() => handleNoteClick(note)}
          >
            <div className="note-header">
              <button onClick={(e) => handleDelete(note._id)}>Delete</button>
            </div>
            <h2>{note.noteTitle}</h2>
            <p>{note.noteBody}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
