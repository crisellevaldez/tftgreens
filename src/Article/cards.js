import { Stack, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faMugHot, faTruck } from '@fortawesome/free-solid-svg-icons'
import './cards.css';

function Cards() {
    return (
        <Container className="negative-margin">
            <Row>
                <Stack direction="horizontal" gap={3} className="col-md-8 mx-auto cards">      
                    <Stack className="card bg-custom rounded p-4 pt-5">
                        <div className="mx-auto mb-2"> 
                            <FontAwesomeIcon icon={faMugHot} size="3x" color="#FFD4B5" />
                        </div>
                        <h6 className="text-center h6-cards mt-3 mb-3"> Lorem Ipsum </h6>
                        <p className="text-center p-cards"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>

                    <Stack className="card bg-custom rounded p-4 pt-5 pb-5">
                        <div className="mx-auto mb-2"> 
                            <FontAwesomeIcon icon={faGift} size="3x" color="#FFD4B5" />
                        </div>
                        <h6 className="text-center h6-cards mt-3 mb-3"> Lorem Ipsum </h6>
                        <p className="text-center p-cards"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>

                    <Stack className="card bg-custom rounded p-4 pt-5 pb-5">
                        <div className="mx-auto mb-3"> 
                            <FontAwesomeIcon icon={faTruck} size="3x" color="#FFD4B5" />
                        </div>
                        <h6 className="text-center h6-cards mt-3 mb-2"> Lorem Ipsum </h6>
                        <p className="text-center p-cards"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>
                </Stack>
            </Row>
        </Container>
    )
}

export default Cards;
