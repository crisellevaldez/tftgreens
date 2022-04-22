import { Container, Nav, Navbar, Row } from "react-bootstrap";
import "./header.css";

function Header() {
  return (
    <Container>
      <Row>
        <Navbar bg="light" expand="lg" className="nav nav-header">
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link href="#home" className="header">
              HOME
            </Nav.Link>
            <Nav.Link href="#about" className="header">
              ABOUT US
            </Nav.Link>
            <Nav.Link href="#inquire" className="header">
              INQUIRE NOW
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Header;
