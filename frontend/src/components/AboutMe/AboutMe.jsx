import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./AboutMe.css";
const AboutMe = () => {
    const conocimientos = [
        { src: "/img/excel.png", alt: "EXCEL" },
        { src: "/img/html5.png", alt: "HTML5" },
        { src: "/img/css3.png", alt: "CSS3" },
        { src: "/img/sass.png", alt: "SASS" },
        { src: "/img/bootstrap.png", alt: "BOOTSTRAP" },
        { src: "/img/git.png", alt: "GIT" },
        { src: "/img/github.png", alt: "GITHUB" },
        { src: "/img/js.png", alt: "JAVASCRIPT" },
        { src: "/img/react.png", alt: "REACTJS" },
        { src: "/img/expressjs.png", alt: "EXPRESSJS" },
        { src: "/img/postman.png", alt: "POSTMAN" },
        { src: "/img/nodejs.png", alt: "NODEJS" },
        { src: "/img/firebase.png", alt: "FIREBASE" },
        { src: "/img/mongodb.png", alt: "MONGODB" },
        { src: "/img/mysql.png", alt: "MYSQL" },
    ];
    return (
        <Container>
            <Row className="align-items-center mt-5">
                <Col md={7} className="text-center">
                    <h1>Sobre Mi</h1>
                    <p>
                        Soy Lucas Berardi, un desarrollador FullStack MERN
                        formado en Coderhouse, con experiencia previa en un rol
                        administrativo durante los últimos cinco años. En mi
                        carrera administrativa, he utilizado herramientas como
                        Microsoft Excel para llevar registros financieros,
                        realizar informes y análisis de datos, lo que me ha
                        brindado habilidades en organización, precisión y
                        gestión del tiempo.
                        <br />
                        Mi pasión por la programación me ha llevado a adquirir
                        una sólida formación en desarrollo web. Estoy buscando
                        iniciar mi carrera profesional en el sector IT, donde
                        puedo aplicar y expandir mis habilidades técnicas y
                        contribuir significativamente a cualquier equipo.
                        <br />
                        Soy una persona responsable, organizada y con una gran
                        capacidad de adaptación y aprendizaje. Me motiva
                        adquirir cualquier tipo de conocimiento relacionado con
                        el mundo de la programación y estoy en busca de mi
                        primer empleo en IT, ya sea en desarrollo, testing,
                        análisis de datos u otra área relacionada. Estoy
                        decidido a ganar experiencia en el ámbito laboral y ser
                        de utilidad para quien me brinde la oportunidad.
                    </p>
                </Col>
                <Col md={5} className="text-center mx-auto">
                    <img
                        src="/img/foto-perfil.png"
                        alt="foto"
                        style={{ width: "100%", height: "auto" }}
                    />
                </Col>
            </Row>
            <Row className="text-center mt-5 mb-5">
                <Col>
                    <h2>Conocimientos:</h2>
                </Col>
            </Row>
            <Row>
                {conocimientos.map((conocimiento, index) => (
                    <Col
                        key={index}
                        xs={4}
                        sm={3}
                        md={2}
                        lg={1}
                        className="d-flex justify-content-center align-items-center mb-4"
                    >
                        <img
                            src={conocimiento.src}
                            alt={conocimiento.alt}
                            className="img-fluid"
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default AboutMe;
