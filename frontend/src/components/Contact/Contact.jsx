import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Contact.css";

const Contact = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");

    const API_URL = 'https://portfolio-14dl.onrender.com/api/enviar-correo'
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(API_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ nombre, email, mensaje }),
                }
            );
            if(!response.ok){
                throw new Error(`Error al enviar mensaje!`)
            }
            const result = await response.json();
            toast.success(result.message || `Mensaje enviado con exito!`);
        } catch (error) {
            //console.error("Error:", error);
            toast.error(`Error al enviar mensaje!`);
        }
    };

    return (
        <Container fluid className="p-4">
            <h1 className="text-center">Contacto</h1>
            <h2 className="text-center mb-4">Envíame un mensaje!</h2>
            <Form onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Introduce tu nombre"
                            value={nombre}
                            onChange={(e) => setNombre(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Introduce tu email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridMessage">
                        <Form.Label>Mensaje</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Escribe tu mensaje"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            required
                        />
                    </Form.Group>
                </Row>
                <div className="text-center">
                    <Button variant="dark" type="submit">
                        Enviar
                    </Button>
                </div>
            </Form>
            <ToastContainer position="top-right" autoClose={3000} />
        </Container>
    );
};

export default Contact;
