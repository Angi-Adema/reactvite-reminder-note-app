import { useState } from "react"
import "./styles.css"

export default function App() {
  const [title, setTitle] = useState("")
  const [noteContent, setNoteContent] = useState("")
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "test note 1",
      content: "bla bla note1",
    },
    {
      id: 2,
      title: "test note 2 ",
      content: "bla bla note2",
    },
    {
      id: 3,
      title: "test note 3",
      content: "bla bla note3",
    },
  ])

  const handleSubmitNote = (e) => {
    e.preventDefault()

    const newNote = {
      id: notes.length + 1,
      title: title,
      noteContent: noteContent,
    }

    console.log("noteContent: ", noteContent)

    setNotes([newNote, ...notes])

    setTitle("")
    setNoteContent("")
  }

  return (
    <div className="main-container">
      <form className="form" onSubmit={handleSubmitNote}>
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

        <button type="submit">Save Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
            <div className="note-header">
              <button>Delete</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.noteContent}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
