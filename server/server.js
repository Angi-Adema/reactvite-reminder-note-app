const express = require("express")
const path = require("path")
const db = require("./config/connection")
const routes = require("./routes")

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/dist")))
}

app.use(routes)

db.once("open", () => {
  app.listen(PORT, () => console.log("server is running"))
})
