import { Stack, Container, Row } from 'react-bootstrap';
import './article.css';

function Section() {
    return (
        <Container className="bg-dark text-white article-container">
            <Row>
                <Stack gap={2} className="col-md-5 mx-auto">
                    <h4 className="text-center"> Lorem Ipsum </h4>
                    <Stack className="col-md-5 mx-auto">
                        <p className="text-center p-article"> Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown
                            printer took a galley of type and scrambled it to make a 
                            type specimen book.  </p>
                    </Stack>
                </Stack>
            </Row>
        </Container>
    )
}

export default Section;
