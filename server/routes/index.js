const router = require("express").Router()
const apiRoutes = require("./api")

router.use("/api", apiRoutes)

app.get((req, res) => {
  res.sendFile(path.join(__dirname, "../../client/dist/index.html"))
})

module.exports = router
