import React from "react";
import "./style.css";
import { Navbar, Nav, Form, Button, FormControl, } from "react-bootstrap";


const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
        <Nav.Link href="#home">Navbar</Nav.Link>
        </Nav>
        <Form.Row>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-warning">Search</Button>
        </Form>
        </Form.Row>
      </Navbar>
    </>
  );
};

export default NavBar;
