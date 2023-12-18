import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

export default function Navigation() {
  const loggedIn = false

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "1rem",
      }}
    >
      <div>
        <Navbar.Brand>
          <span style={{ fontWeight: "bold" }}>Reminder Notes</span>
        </Navbar.Brand>
      </div>
      <div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/">Home</Nav.Link>
            {loggedIn ? (
              <Nav.Link href="#">Logout</Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
