import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import Auth from "../../utils/auth"

export default function Navigation() {
  const loggedIn = Auth.loggedIn()

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary"
      style={{
        // position: "fixed",
        // top: "0",
        // left: "0",
        // width: "100%",
        display: "flex",
        justifyContent: "space-between",
        paddingRight: "1rem",
        paddingLeft: "1rem",
        marginBottom: "6px",
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
              <Nav.Link href="#" onClick={Auth.logout}>
                Logout
              </Nav.Link>
            ) : (
              <Nav.Link href="/login">Login</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}
