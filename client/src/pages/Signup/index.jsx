import { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { addUser } from "../../utils/API"
import Auth from "../../utils/auth"
import { Link } from "react-router-dom"

export default function Signup() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await addUser(formState)

      if (!response.ok) {
        console.log("error adding user")
      }
      const { token, user } = await response.json()
      console.log(user)
      Auth.login(token)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "5rem",
            border: "solid black 2px",
            borderRadius: "6px",
            width: "22%",
            backgroundColor: "#D1BDEF",
            padding: "12px",
          }}
          onSubmit={handleSubmit}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "4px",
            }}
          >
            <h1>Sign Up</h1>
          </div>
          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter First Name"
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>Last Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Last Name"
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              name="email"
              value={formState.email}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              value={formState.password}
              onChange={handleChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            style={{
              width: "30%",
              minWidth: "100px",
              backgroundColor: "#7f4bd2",
              border: "none",
            }}
          >
            Submit
          </Button>
        </Form>
        <p>
          Already a Member? Click <Link to="/login">HERE</Link> to Login!
        </p>
      </div>
    </>
  )
}
