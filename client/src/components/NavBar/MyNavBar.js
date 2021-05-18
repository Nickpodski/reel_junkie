import React from "react";
// import "./MyNavBar.css";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
// // import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="justify-content-between">
        <Navbar.Brand href="#home">Reel Junkies</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
              </Form>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
