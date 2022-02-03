import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import './header.css';
function Header() {
    return (
        <Container>
            <Row>
                <Navbar bg="light" expand="lg" className="nav">
                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <div className="" style={{ marginLeft: '60rem' }}>
                            <Nav className="nav-color" className="">
                                <Nav.Link href="#home" className="header">HOME</Nav.Link>
                                <Nav.Link href="#about" className="header">ABOUT US</Nav.Link>
                                <Nav.Link href="#order" className="header">CREATE YOUR ORDER</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>

            </Row>
        </Container>
    );
}

export default Header;