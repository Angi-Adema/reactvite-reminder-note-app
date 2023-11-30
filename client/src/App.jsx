import { useState } from "react"
import "./styles.css"

export default function App() {
  const [title, setTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [selectedNote, setSelectedNote] = useState(null)
  const [notes, setNotes] = useState([])

  const handleSubmitNote = (e) => {
    e.preventDefault()

    const newNote = {
      id: notes.length + 1,
      title: title,
      content: noteContent,
    }

    setNotes([newNote, ...notes])

    setTitle("")
    setNoteContent("")
  }

  const handleNoteClick = (note) => {
    setSelectedNote(note)
    setTitle(note.title)
    setNoteContent(note.content)
  }

  const handleEditNote = (e) => {
    e.preventDefault()

    if (!selectedNote) {
      return
    }

    const editNote = {
      id: selectedNote.id,
      title: title,
      content: noteContent,
    }

    const editedNotesList = notes.map((note) =>
      note.id === selectedNote.id ? editNote : note
    )

    setNotes(editedNotesList)
    setTitle("")
    setNoteContent("")
    setSelectedNote(null)
  }

  const handleCancel = () => {
    setTitle("")
    setNoteContent("")
    setSelectedNote(null)
  }

  const handleDelete = (e, noteId) => {
    e.stopPropagation()

    const updatedNotesList = notes.filter((note) => note.id !== noteId)

    setNotes(updatedNotesList)
  }

  return (
    <div className="main-container">
      <form
        className="form"
        onSubmit={(e) =>
          selectedNote ? handleEditNote(e) : handleSubmitNote(e)
        }
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
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
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div
            key={note.id}
            className="note-item"
            onClick={() => handleNoteClick(note)}
          >
            <div className="note-header">
              <button onClick={(e) => handleDelete(e, note.id)}>Delete</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
