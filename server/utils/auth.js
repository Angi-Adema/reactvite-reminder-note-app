const jwt = require("jsonwebtoken")

const secret = "supersecret"
const expiration = "1h"

module.exports = {
  authMiddleware: function (req, res, next) {
    let token = req.query.token || req.headers.authorization

    if (req.headers.authorization) {
      token = token.split(" ").pop().trim()
    }

    if (!token) {
      return res.status(400).json({ message: "You have no token!" })
    }

    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration })
      req.user = data
    } catch {
      console.log("Invalid token")
      return res.status(400).json({ message: "invalid token!" })
    }

    next()
  },
  signToken: function ({ email, password, _id }) {
    const payload = { email, password, _id }

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration })
  },
}
