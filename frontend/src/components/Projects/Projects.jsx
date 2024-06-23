import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Projects = () => {
    const projects = [
        {
            title: "Hardsthetics",
            imgUrl: "/img/hardsthetics-img.jpg",
            liveUrl: "https://hardsthetics.netlify.app/",
            codeUrl: "https://github.com/lucasberardi95/hardsthetics.git",
        },
        {
            title: "Usd Exchange Arg",
            imgUrl: "/img/UsdExcArg-img.jpg",
            liveUrl: "",
            codeUrl: "https://github.com/lucasberardi95/jsProyectoFinal.git",
        },
        {
            title: "Defqon Proteins",
            imgUrl: "/img/defqon-proteins-img.jpg",
            liveUrl: "",
            codeUrl:
                "https://github.com/lucasberardi95/PF-React-DefqonProteins.git",
        },
        {
            title: "Backend",
            imgUrl: "/img/backend-img.jpg",
            liveUrl: "",
            codeUrl:
                "https://github.com/lucasberardi95/BackendCoder-EntregaFinal.git",
        },
        {
            title: "Banco LB",
            imgUrl: "/img/bancolb-img.jpg",
            liveUrl: "",
            codeUrl:
                "https://drive.google.com/drive/u/0/folders/1BjMz1WvA5PyraKUA7W56xPc3ihxNw4Rn",
        },
    ];

    return (
        <section className="py-5">
            <Container>
                <h1 className="text-center mb-5">Proyectos</h1>
                <Row className="justify-content-center">
                    {projects.map((project, index) => (
                        <Col key={index} md={4} lg={3} className="mb-4">
                            <Card className="h-100 shadow-sm">
                                <div
                                    style={{
                                        width: "100%",
                                        height: "200px",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        overflow: "hidden",
                                        borderTopLeftRadius: "8px",
                                        borderTopRightRadius: "8px",
                                    }}
                                >
                                    <Card.Img
                                        variant="top"
                                        src={project.imgUrl}
                                        alt={project.title}
                                        className="img-fluid"
                                        style={{
                                            objectFit: "cover",
                                            width: "75%",
                                            height: "75%",
                                            borderRadius: "8px",
                                        }}
                                    />
                                </div>
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title>{project.title}</Card.Title>
                                    <div className="mt-auto">
                                        {project.liveUrl && (
                                            <Button
                                                href={project.liveUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="me-2"
                                                variant="dark"
                                            >
                                                Web
                                            </Button>
                                        )}
                                        <Button
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            variant="dark"
                                        >
                                            {"</>"}
                                        </Button>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Projects;
