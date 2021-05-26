import React from 'react';
import "./Register.css";
import { Button, Form, Container } from "react-bootstrap";

function Register() {
    return (
        <Container className="container-border p-5 mt-5">
        <Form>
        <Form.Group controlId="formBasicEmail">
        <Form.Label className="form-text">Register Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Label className="form-text">Register Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group controlId="formBasicPassword">
        <Form.Label className="form-text" >Verfiy Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="warning" type="register">
        Register
      </Button>
    </Form>
    </Container>
    )
}

export default Register;
