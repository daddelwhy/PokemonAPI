import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Head.css";

function Mybar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to={"/"}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1200px-International_Pok%C3%A9mon_logo.svg.png"
              alt="img"
              className="logo"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to={"/blogs"}>
              Blogs
            </Nav.Link>
            <Nav.Link as={Link} to={"/contacts"}>
              Contacts
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Mybar;
