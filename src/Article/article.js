import { Stack, Container, Row } from "react-bootstrap";
import "./article.css";

function Section() {
  return (
    <Container className="bg-light text-black article-container" id="about">
      <Row>
        <Stack gap={2} className="col-md-5 mx-auto">
          <Stack className="col-md-5 mx-auto">
            <p className="p-article">
              {" "}
              When it comes to the milk tea craze, nothing quite compares to the
              Filipinos' unmatched patronage. The heavenly sweet and creamy
              goodness of milk tea satisfies our cravings and helps us realize
              how lucky we are to be alive during the milk tea craze in the
              Philippines.
              <br />
              Well, when we talk about milk tea, countless names of different
              brands and shops come to mind. But despite theq overwhelming
              choices of milk tea available, there are only a few that stand out
              from the crowd and one of those is Tastes from the Greens or TFTG.
              This popular milk tea shop is proudly homegrown and was founded in
              The Culinary Capital of the Philippines or Pampanga when it first
              opened its doors along McArthur Highway.
              <br />
              TFTG gained a lot of Kapampangan Fans and then eventually expanded
              to Metro Manila where it became one of the most popular milk tea
              brands in the entire country. Tastes from the Greens offers a huge
              set of fun and exciting milk tea flavors which will make you come
              back for more. Moreover, the affordable prices of its drinks is
              certainly a customer magnet because it allows each and every
              Filipino to enjoy the chance of sipping a cup of creamy and tasty
              goodness.{" "}
            </p>
          </Stack>
        </Stack>
      </Row>
    </Container>
  );
}

export default Section;
