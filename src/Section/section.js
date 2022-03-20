import { Stack, Container, Row } from 'react-bootstrap';
import './section.css';
import logo from '../imgs/milk-tea.png';

function Section() {
    return (
        <Container>
            <Row>
                <Stack direction="horizontal" gap={3} className="col-md-12 mx-auto pt-5 pb-5 cards">      
                    <Stack className="card border-0 rounded p-4 pt-5">
                        <div className="mx-auto mb-3"> 
                            <img src={logo} alt="Logo" width="100" />
                        </div>
                        <h6 className="text-center h6-section mt-3 mb-3"> Criselle </h6>
                        <p className="text-center p-section"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>

                    <Stack className="card border-0 rounded p-4 pt-5 pb-5">
                        <div className="mx-auto mb-3"> 
                            <img src={logo} alt="Logo" width="100" />
                        </div>
                        <h6 className="text-center h6-section mt-3 mb-3"> Lorem Ipsum </h6>
                        <p className="text-center p-section"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>

                    <Stack className="card border-0 rounded p-4 pt-5 pb-5">
                        <div className="mx-auto mb-3"> 
                            <img src={logo} alt="Logo" width="100" />
                        </div>
                        <h6 className="text-center h6-section mt-3 mb-2"> Lorem Ipsum </h6>
                        <p className="text-center p-section"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>

                    <Stack className="card border-0 rounded p-4 pt-5 pb-5">
                        <div className="mx-auto mb-3"> 
                            <img src={logo} alt="Logo" width="100" />
                        </div>
                        <h6 className="text-center h6-section mt-3 mb-2"> Lorem Ipsum </h6>
                        <p className="text-center p-section"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc consequat pharetra accumsan. Vivamus ultricies tincidunt ligula, nec hendrerit diam iaculis eget. </p>
                    </Stack>
                </Stack>
            </Row>
        </Container>
    )
}

export default Section;
