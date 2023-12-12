// import { useEffect, useState } from "react"

// import { getAllNotes, deleteNote, addNote, editNote } from "./utils/API"
import { Outlet } from "react-router-dom"
import Navigation from "./components/Nav"

export default function App() {
  return (
    <>
      <Navigation />
      <Outlet />
    </>
  )
}
