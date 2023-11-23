import "./styles.css"

export default function App() {
  return (
    <div className="main-container">
      <form className="form">
        <input type="text" placeholder="Title" required />
        <textarea type="text" placeholder="Enter Note" rows={15} required />

        <button type="submit">Save Note</button>
      </form>
      <div className="notes-grid">
        <div className="single-note">
          <div className="note-header">
            <button>Delete</button>
          </div>
          <h2>Note Title</h2>
          <p>Note Text</p>
        </div>
      </div>
    </div>
  )
}
