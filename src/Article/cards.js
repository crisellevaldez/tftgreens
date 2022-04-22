import { Stack, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import "./cards.css";

function Cards() {
  return (
    <Container className="negative-margin">
      <Row>
        <Stack
          direction="horizontal"
          gap={3}
          className="col-md-8 mx-auto cards"
        >
          <Stack className="card bg-custom rounded p-4 pt-5">
            <div className="mx-auto mb-2 cards-icon">
              <FontAwesomeIcon icon={faMugHot} size="3x" color="#FFD4B5" />
            </div>
            <h6 className="text-center h6-cards mt-3 mb-3"> Cream Puff </h6>
            <p className="text-justify mx-auto  p-cards">
              {" "}
              <span className="quote-icon">
                {" "}
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2x"
                  color="#FFD4B5"
                />{" "}
              </span>
              I have visited this shop three times in a span of 2 weeks and I'm
              from Mandaluyong! First time I tried this was last January 1 in
              San Simon Pampanga. I'd say the taste of how its prepared in
              Pampanga is a bit better but it's still THE BEST MILK TEA BY
              FAR... <br />
              plus their reasonable price!{" "}
            </p>
          </Stack>

          <Stack className="card bg-custom rounded p-4 pt-5 pb-5">
            <div className="mx-auto mb-2">
              <FontAwesomeIcon icon={faMugHot} size="3x" color="#FFD4B5" />
            </div>
            <h6 className="text-center h6-cards mt-3 mb-3"> Supreme taro </h6>
            <p className="text-justify mx-auto mx-auto p-cards">
              {" "}
              <span className="quote-icon">
                {" "}
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2x"
                  color="#FFD4B5"
                />{" "}
              </span>
              Supreme taro (with additional salted cream cheese) and supreme
              chocomalt for the win!!! PLUSSSS... organic ang milktea nila Best
              milktea place for me!!!{" "}
            </p>
          </Stack>

          <Stack className="card bg-custom rounded p-4 pt-5 pb-5">
            <div className="mx-auto mb-2">
              <FontAwesomeIcon icon={faMugHot} size="3x" color="#FFD4B5" />
            </div>
            <h6 className="text-center h6-cards mt-3 mb-2"> TFTG </h6>
            <p className="text-justify mx-auto p-cards">
              {" "}
              <span className="quote-icon">
                {" "}
                <FontAwesomeIcon
                  icon={faQuoteLeft}
                  size="2x"
                  color="#FFD4B5"
                />{" "}
              </span>
              I highly recommend this milktea shop. Super sulit po, it is not
              just the delicious taste of the drinks but also the people or the
              crew there who are very genuine and hospitable. I’m looking
              forward to visit again. And also It was my first time to visit the
              shop and I find it great. Kudos to all!.{" "}
            </p>
          </Stack>
        </Stack>
      </Row>
    </Container>
  );
}

export default Cards;
