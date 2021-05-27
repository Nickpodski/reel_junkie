import React, { useState, useRef } from "react";
import "./Login.css";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from "axios";
// import axios from 'axios';

function Login() {
  let history = useHistory();
  const formRef = useRef();
  const [user, setUser] = useState(
    {
      "email": "",
      "password": ""
    }
  );
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");

  const onEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  const onPassWordChange = (event) => {
    const newPassWord = event.target.value;
    setPassWord(newPassWord);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setUser({
      "email":email,
      "password":password
    });
    formRef.current.reset();
    axios.post('/api/user/logIn', { user } )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log('Error', error.message);
        }
      })
  }

  const handleRegisterClick = (event) => {
    event.preventDefault();
    history.push("/register");
  };

  return (
    <Container className="container-border p-5 mt-5">
      <Form ref={formRef} action={"#"}>
        <Form.Group onSubmit={handleSubmit} controlId="formBasicEmail">
          <Form.Label className="form-text">Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group onSubmit={handleSubmit} controlId="formBasicPassword">
          <Form.Label className="form-text">Password</Form.Label>
          <Form.Control type="password" placeholder="Password" onChange={onPassWordChange}/>
        </Form.Group>
        <Button className="sub-btn m-2"variant="warning" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
        <Button className="reg-btn m-2" variant="warning" onClick={handleRegisterClick}>
          Register
        </Button>
      </Form>
    </Container>
  );
}

export default Login;
