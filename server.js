const express = require("express")

const mysql = require("mysql2")

const PORT = process.env.PORT || 3001
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "notes_db",
  },
  console.log("Connected to the notes_db database.")
)
