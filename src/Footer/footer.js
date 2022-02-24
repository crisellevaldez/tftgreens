import { Container, Nav, Navbar, NavDropdown, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons"
import './footer.css';

function Footer() {
    return (
        <div className="footer">
            <Container>
                <Row>
                    <Navbar bg="dark" expand="lg" className="nav">
                        <Col> <Navbar.Brand href="#home" style={{ color: '#FFFFFF', }}>Coffee Roasters</Navbar.Brand></Col>
                        <Navbar.Toggle />
                        <Navbar.Collapse>
                            <Col>
                                <Nav className="nav-color">
                                    <Nav.Link href="#home" style={{ color: '#5E6770' }}>HOME</Nav.Link>
                                    <Nav.Link href="#about" style={{ color: '#5E6770' }}>ABOUT US</Nav.Link>
                                    <Nav.Link href="#order" style={{ color: '#5E6770' }}>CREATE YOUR ORDER</Nav.Link>
                                </Nav>
                            </Col>
                            <Col>
                                <Nav className="nav-color" className="justify-content-end">
                                    <Nav.Link href="#home"> <FontAwesomeIcon icon={faFacebook} color="white" /></Nav.Link>
                                    <Nav.Link href="#about"><FontAwesomeIcon icon={faTwitter} color="white" /></Nav.Link>
                                    <Nav.Link href="#order"><FontAwesomeIcon icon={faInstagram} color="white" /></Nav.Link>
                                </Nav>
                            </Col>
                        </Navbar.Collapse>
                    </Navbar>
                </Row>
            </Container>
        </div >
    );
}

export default Footer;