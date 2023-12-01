export const getAllNotes = () => {
  return fetch("/api/notes", {
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export const deleteNote = (noteId) => {
  return fetch(`/api/notes/${noteId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
}

export const addNote = (data) => {
  return fetch("/api/notes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

export const editNote = (noteId, data) => {
  return fetch(`/api/notes/${noteId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
}
