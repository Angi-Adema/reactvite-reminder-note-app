import { useState } from "react"
import "./styles.css"

export default function App() {
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
    {
      id: 4,
      title: "test note 4 ",
      content: "bla bla note4",
    },
    {
      id: 5,
      title: "test note 5",
      content: "bla bla note5",
    },
    {
      id: 6,
      title: "test note 6",
      content: "bla bla note6",
    },
  ])

  return (
    <div className="main-container">
      <form className="form">
        <input type="text" placeholder="Title" required />
        <textarea type="text" placeholder="Enter Note" rows={15} required />

        <button type="submit">Save Note</button>
      </form>
      <div className="notes-grid">
        {notes.map((note) => (
          <div className="note-item">
            <div className="note-header">
              <button>Delete</button>
            </div>
            <h2>{note.title}</h2>
            <p>{note.content}</p>
          </div>
        ))}
        <div className="single-note">
          <h2>Note Title</h2>
          <p>Note Text</p>
        </div>
      </div>
    </div>
  )
}
