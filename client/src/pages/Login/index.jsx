import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { Link } from "react-router-dom"
import { loginUser } from "../../utils/API"
import Auth from "../../utils/auth"

export default function Login() {
  const [formState, setFormState] = useState({ email: "", password: "" })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormState({ ...formState, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await loginUser(formState)

      if (!response.ok) {
        console.log("Error logging in!")
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
            border: "solid black 2px",
            borderRadius: "6px",
            width: "22%",
            backgroundColor: "#D1BDEF",
            padding: "12px",
            boxShadow: "0px 0px 15px #3D3D3D",
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
            <h1>Login</h1>
          </div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
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

          <Form.Group className="mb-3" controlId="formBasicPassword">
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
        <div
          style={{
            margin: "3px",
            fontSize: "18px",
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>
            Not a Member? Click <Link to="/Signup">HERE</Link> to Sign Up!
          </p>
        </div>
      </div>
    </>
  )
}
