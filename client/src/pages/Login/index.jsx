import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Login() {
  return (
    <>
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
          <Form.Label style={{ fontWeight: "bold" }}>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          style={{ width: "30%", backgroundColor: "#7f4bd2", border: "none" }}
        >
          Submit
        </Button>
      </Form>
      <div style={{ margin: "3px", fontSize: "18px", fontWeight: "bold" }}>
        <p>
          Not a Member? Click <span href="/Signup">HERE</span> to Signup!
        </p>
      </div>
    </>
  )
}
