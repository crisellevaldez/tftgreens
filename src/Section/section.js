import { Stack, Container, Row } from "react-bootstrap";
import "./section.css";
import coffeeMenu from "../imgs/coffee-menu.png";
import chocomaltMenu from "../imgs/chocomalt-menu.png";
import darkChocoMenu from "../imgs/darkchoco-menu.png";
import strawChocoMenu from "../imgs/strawchoco-menu.png";

function Section() {
  return (
    <Container>
      <Row>
        <Stack
          direction="horizontal"
          gap={3}
          className="col-md-12 mx-auto pt-5 pb-5 cards"
        >
          <Stack className="card border-0 rounded p-4 pt-5">
            <div className="mx-auto mb-3">
              <img src={coffeeMenu} alt="coffeeMenu" width="200" height="200" />
            </div>
            <h6 className="text-center h6-section mt-3 mb-3"> Coffee </h6>
            <p className="text-center p-section">
              {" "}
              Presenting! TFTG's ligthly creamed, smooth, brown, bitter rich and
              deep coffee taste that will surely awaken your senses.
            </p>
          </Stack>

          <Stack className="card border-0 rounded p-4 pt-5 pb-5">
            <div className="mx-auto mb-3">
              <img
                src={chocomaltMenu}
                alt="chocomaltMenu"
                width="200"
                height="200"
              />
            </div>
            <h6 className="text-center h6-section mt-3 mb-3">
              {" "}
              Choco Malt Creampuff{" "}
            </h6>
            <p className="text-center p-section">
              {" "}
              When life gives you lemons, throw it back and ask for a chocomalt
              creampuff and customize it by adding extra pearls! .{" "}
            </p>
          </Stack>

          <Stack className="card border-0 rounded p-4 pt-5 pb-5">
            <div className="mx-auto mb-3">
              <img
                src={strawChocoMenu}
                alt="strawChocoMenu"
                width="200"
                height="200"
              />
            </div>
            <h6 className="text-center h6-section mt-3 mb-2">
              {" "}
              Supreme Chocomalt
            </h6>
            <p className="text-center p-section">
              {" "}
              Milk tea on a rainy day? Why not!? Especially if it's Tastes from
              the Greens' new supreme chocomalt creampuff!{" "}
            </p>
          </Stack>

          <Stack className="card border-0 rounded p-4 pt-5 pb-5">
            <div className="mx-auto mb-3">
              <img
                src={darkChocoMenu}
                alt="darkChocoMenu"
                width="200"
                height="200"
              />
            </div>
            <h6 className="text-center h6-section mt-3 mb-2">
              {" "}
              Prime Dark Chocolate{" "}
            </h6>
            <p className="text-center p-section">
              {" "}
              Never underestimate the power of dark chocolate. Having a bad day?
              Try one of our best seller in our smoothies!, Dark chocolate with
              pearl plus creampuff and it will give you the boost you need to
              get through the day!
            </p>
          </Stack>
        </Stack>
      </Row>
    </Container>
  );
}

export default Section;
