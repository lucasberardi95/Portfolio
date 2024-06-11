import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import classNames from "classnames";
import { Link, NavLink } from "react-router-dom";

const dark_theme = "dark-theme";
const light_theme = "light-theme";

const NavBar = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || dark_theme
    );

    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === dark_theme ? light_theme : dark_theme);
    };
    return (
        <Navbar
            expand="lg"
            className={classNames({
                "navbar-dark-theme": theme === dark_theme,
                "navbar-light-theme": theme === light_theme,
            })}
        >
            <Container className="custom-navbar-container">
                <Navbar.Brand as={Link} to={"/"}>
                    <img
                        src="/img/LB.png"
                        alt="logo"
                        style={{ width: "65px" }}
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={NavLink}
                            to="/"
                            className={`text-${
                                theme === dark_theme ? "light" : "dark"
                            }`}
                            style={{ fontSize: "20px" }}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/SobreMi"
                            className={`text-${
                                theme === dark_theme ? "light" : "dark"
                            }`}
                            style={{ fontSize: "20px" }}
                        >
                            Sobre Mi
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Proyectos"
                            className={`text-${
                                theme === dark_theme ? "light" : "dark"
                            }`}
                            style={{ fontSize: "20px" }}
                        >
                            Proyectos
                        </Nav.Link>
                        <Nav.Link
                            as={NavLink}
                            to="/Contacto"
                            className={`text-${
                                theme === dark_theme ? "light" : "dark"
                            }`}
                            style={{ fontSize: "20px" }}
                        >
                            Contacto
                        </Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link
                            href="https://www.linkedin.com/in/lucasberardi/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/svg/linkedin.svg"
                                alt="linkedin"
                                className="svg-icon"
                                style={{ width: "25px" }}
                            />
                        </Nav.Link>
                        <Nav.Link
                            href="https://github.com/lucasberardi95"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src="/svg/github.svg"
                                alt="github"
                                className="svg-icon"
                                style={{ width: "25px" }}
                            />
                        </Nav.Link>
                        <Nav.Link href="/CV Lucas Berardi en español.pdf" download>
                            <img
                                src="/svg/cv.svg"
                                alt="cv"
                                className="svg-icon"
                                style={{ width: "25px" }}
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    aria-label="Toggle theme"
                >
                    {theme === dark_theme ? (
                        <img
                            src="/svg/sun.svg"
                            alt="sun"
                            className="sun svg-icon"
                            style={{ width: "30px", height: "30px" }}
                        />
                    ) : (
                        <img
                            src="/svg/moon.svg"
                            alt="moon"
                            className="moon svg-icon"
                            style={{ width: "30px", height: "30px" }}
                        />
                    )}
                </button>
            </Container>
        </Navbar>
    );
};

export default NavBar;
