import React from "react";
// import "./MyNavBar.css";
import {Nav, Button, Navbar, Form, FormControl} from "react-bootstrap";
import { Link, useHistory } from 'react-router-dom';



const NavBar = (props) => {
  const {onChange, onSubmit} = props;
 let history = useHistory();

  const handleSumbit = (event) => {
    event.preventDefault();
    history.push("/moviesearch");
    onSubmit();
  }

  return (
    <>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Navbar.Brand href="#home">Reel Junkies</Navbar.Brand>
          <Form inline onSubmit={handleSumbit}>
            <FormControl onChange={onChange} type="text" placeholder="Search" className="mr-sm-2 justify-content-center"/>
            <Button variant="outline-info" onClick={handleSumbit}>Search</Button>
          </Form>
        <Nav>
          <Nav.Item>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
