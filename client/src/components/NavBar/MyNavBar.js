import React, { useRef } from "react";
import "./MyNavBar.css";
import { Nav, Button, Navbar, Form, FormControl, Media } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const NavBar = (props) => {
  const { onChange, onSubmit, user, logout } = props;
  let history = useHistory();
  const formRef = useRef();

  const handleSumbit = (event) => {
    event.preventDefault();
    history.push("/moviesearch");
    onSubmit();
    formRef.current.reset();
  };

  const handleLogout = () => {
    logout({
      email: "",
      movies_watched: [],
      watchlist:[],
      isLoggedIn: false
    });
  }

  return (
    <>
      <Navbar
        // className="navbar"
        bg="black"
        variant="dark"
        sticky="top"
        className="navbar border-bottom border-warning justify-content-between"
      >
        <Navbar.Brand as={Link} to="/home">
          <Media>
            <img
              width={100}
              height={75}
              src="./images/reel-junkie-logo-2.jpg"
              alt=""
            />
          </Media>
        </Navbar.Brand>
        <Form inline onSubmit={handleSumbit} ref={formRef}>
          <FormControl
            onChange={onChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2 justify-content-center search-input"
          />
          <Button className= "search-btn" variant="warning" onClick={handleSumbit}>
            Search
          </Button>
        </Form>
        <Nav>
          <Nav.Item>
            {user.isLoggedIn === false
            ? ( <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>)
            : ( <Nav.Link className="link" as={Link} to='/home' onClick=    {handleLogout}>
                  Logout
                </Nav.Link>)
            }
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
