import { Container, Nav, Navbar, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faPhone,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";
import logo from "../imgs/taste.png";

function Footer() {
  return (
    <Container id="inquire">
      <Row>
        <Navbar bg="light" expand="lg" className="nav nav-footer">
          <Container>
            <Navbar.Brand>
              {" "}
              <h2 className="text-black">
                {" "}
                You want to franchise{" "}
                <span className="" style={{ color: "#3A6E2B" }}>
                  {" "}
                  Tastes from the Greens
                </span>
                ?
              </h2>
              <p className="sub-details">
                {" "}
                Send us an email at
                <span
                  className=""
                  style={{ color: "#878A28", fontWeight: "bold" }}
                >
                  {" "}
                  tastesfromthegreens@gmail.com
                </span>
              </p>
              <Nav className="me-auto">
                <Nav.Link
                  href="https://www.facebook.com/tastesfromthegreens"
                  className="facebook-icon"
                >
                  <FontAwesomeIcon icon={faFacebook} color="black" />
                </Nav.Link>
                <Nav.Link href="#twitter" className="twitter-icon">
                  <FontAwesomeIcon icon={faTwitter} color="black" />
                </Nav.Link>
                <Nav.Link href="#instagram" className="instagram-icon">
                  <FontAwesomeIcon icon={faInstagram} color="black" />
                </Nav.Link>
              </Nav>
              <div className="logo">
                <img
                  src={logo}
                  width="200"
                  height="100"
                  className="footer-logo"
                  alt="Tastes from the greens logo"
                />
              </div>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Row>
    </Container>
  );
}

export default Footer;
