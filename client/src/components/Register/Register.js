import React, { useState, useRef } from 'react';
import "./Register.css";
import { Button, Form, Container } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import axios from "axios";

function Register() {
  let history = useHistory();
  const formRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassWord] = useState("");
  const [passwordVer, setPassWordVer] = useState("");
  const [user, setUser] = useState(
    {
      "email": "",
      "password": ""
    }
  );

  const onEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  }

  const onPassWordChange = (event) => {
    const newPassWord = event.target.value;
    setPassWord(newPassWord);
  }

  const onPassWordVerChange = (event) => {
    const newPassWord = event.target.value;
    setPassWordVer(newPassWord);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === passwordVer) {
      setUser({
        "email": email,
        "password": password
      });
      formRef.current.reset();
      axios.post('/api/user/register', { user })
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
        });
      history.push('/login');
    } else {
      console.log("Passwords must Match!");
    }
  }

    return (
        <Container className="container-border p-5 mt-5">
        <Form ref={formRef} action={"#"}>
        <Form.Group onSubmit={handleSubmit} controlId="formBasicEmail">
        <Form.Label className="form-text">Register Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" onChange={onEmailChange} />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group onSubmit={handleSubmit} controlId="formBasicPassword">
        <Form.Label className="form-text">Register Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={onPassWordChange}/>
      </Form.Group>
      <Form.Group onSubmit={handleSubmit} controlId="formBasicPassword">
        <Form.Label className="form-text" >Verfiy Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={onPassWordVerChange}/>
      </Form.Group>
      <Button variant="warning" type="register" onClick={handleSubmit}>
        Register
      </Button>
    </Form>
    </Container>
    )
}

export default Register;
