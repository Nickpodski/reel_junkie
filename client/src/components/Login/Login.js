import React from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';

function Login() {
  let history = useHistory();
  const handleSumbit = (event) => {
    event.preventDefault();
    history.push("/register");
  };
  return (
    <Container className="container-border p-5">
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label className="form-text">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label className="form-text">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
        <Button variant="warning" onClick={handleSumbit}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
