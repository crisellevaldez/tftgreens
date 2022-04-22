import { Stack, Container, Row, Carousel } from "react-bootstrap";
import "./section-2.css";
import cover from "../imgs/dark-chocolate-menu.jpg";

function Section() {
  return (
    <Container>
      <Row>
        <div
          style={{ backgroundImage: `url(${cover})` }}
          className="section2-container"
        >
          <div className="w-50 ml-auto">
            <div className="mx-auto w-75 section2">
              <h1>
                {" "}
                Tastes from <br />
                the Greens.{" "}
              </h1>
              <p className="p-section2">
                {" "}
                You've just got to take a pause, <br /> chill out, relax and
                have a cold drink <br />
                with friends to handle the stress of life.
              </p>
              <button className="btn section2-button"> Inquire Now</button>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default Section;
