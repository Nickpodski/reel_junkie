import React, { useRef } from "react";
import "./MyNavBar.css";
import { Nav, Button, Navbar, Form, FormControl, Card } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import BurgerMenu from "./BurgerMenu";
import { BsSearch } from "react-icons/bs";


const NavBar = (props) => {
  const { onChange, onSubmit, user, logout, notifySuccess } = props;
  let navigate = useNavigate();
  const formRef = useRef();

  const handleSumbit = (event) => {
    event.preventDefault();
    navigate("/moviesearch");
    onSubmit();
    formRef.current.reset();
  };

  const handleLogout = () => {
    notifySuccess(`You've successfully logged out!`);
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
        <Navbar.Brand as={Link} to="/home" onClick={() => window.scrollTo(0, 0)}>
          <Card>
            <img
              width={100}
              height={75}
              src="./images/reel-junkie-logo-2.jpg"
              alt="brand logo"
            />
          </Card>
        </Navbar.Brand>
        <Form inline="true" onSubmit={handleSumbit} ref={formRef}>
          <FormControl
            onChange={onChange}
            type="text"
            placeholder="Search"
            className="mr-sm-2 justify-content-center search-input"
          />
          <Button className= "search-btn" variant="warning" onClick={handleSumbit}>
           <BsSearch />
          </Button>
        </Form>
        <Nav>
          <Nav.Item>
            {user.isLoggedIn === false
            ? ( <Nav.Link className="link" as={Link} to="/login">
                  Login
                </Nav.Link>)
            : ( <BurgerMenu logout={handleLogout} />)
            }
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
