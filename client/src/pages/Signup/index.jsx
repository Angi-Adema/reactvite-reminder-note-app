import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

export default function Signup() {
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
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ fontWeight: "bold" }}>
              Email address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ fontWeight: "bold" }}>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
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
      </div>
    </>
  )
}
