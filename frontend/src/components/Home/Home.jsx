import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Home.css";
import Lottie from "lottie-react";
import AnikiHamster from '../../AnikiHamster.json'
function Home() {
    return (
        <Container>
            <Row className="align-items-center">
                <Col md={7} className="text-center">
                    <h1>Bienvenido</h1>
                    <p>
                        Soy Lucas Berardi, un desarrollador fullstack de Buenos
                        Aires, Argentina, especializado en el stack MERN. Con
                        una pasión por crear soluciones eficientes y
                        funcionales, me enfoco en el desarrollo tanto frontend
                        como backend.
                    </p>
                </Col>
                <Col md={5} className="text-center">
                    <Lottie className="lottie-animation" animationData={AnikiHamster} />                    
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
