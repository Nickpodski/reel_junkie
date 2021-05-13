import React from "react";
import "./MyNavBar.css";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const NavBar = () => {
  return (
    <>
  <Container fluid>
      <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2 justify-content-center" />
            <Button variant="outline-info">Search</Button>
          </Form>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        
      </Navbar>
      </Container>
    </>
  );
};

export default NavBar;
