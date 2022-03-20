import { Stack, Container, Row } from 'react-bootstrap';
import './section-2.css';
import cover from '../imgs/cover.jpg';

function Section() {
    return (
        <Container>
            <Row>
                <div style={{ backgroundImage: `url(${cover})` }} className="section2-container">      
                    <div className="w-50 ml-auto">
                        <div className="mx-auto w-75 section2">
                            <h1> Greate coffee <br/>made simple. </h1>
                            <p className='p-section2'> Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit. <br/></p>
                            <button className="btn section2-button"> Create your plan</button>
                        </div>
                    </div>
                </div>
            </Row>
        </Container>
    )
}

export default Section;
