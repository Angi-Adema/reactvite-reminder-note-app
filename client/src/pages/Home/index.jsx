import React from "react"
import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"
import Auth from "../../utils/auth"

export default function Home() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "30%",
            border: "solid black 2px",
            borderRadius: "6px",
          }}
        >
          <Card.Img variant="top" src="/stickyNotes.jpg" />
          <Card.Body>
            <Card.Title style={{ display: "flex", justifyContent: "center" }}>
              The Handy Sticky Note App!
            </Card.Title>
            <Card.Text>
              Tired of having lots of sticky notes all around your computer?
              Have you lost an important sticky note that then caused you to
              miss an important event or deadline? Problem solved with this
              sticky notes app! Just simply create a login and write all the
              notes you need! They will be kept safely here in the app so you
              never miss an important note again!
            </Card.Text>
          </Card.Body>

          <Card.Body>
            {Auth.loggedIn() ? (
              <Card.Link as={Link} to="/notes">
                See My Notes!
              </Card.Link>
            ) : (
              <Card.Link as={Link} to="/Signup">
                Sign Up!
              </Card.Link>
            )}
          </Card.Body>
        </Card>
      </div>
    </>
  )
}
