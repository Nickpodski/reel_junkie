import React, {useContext, useState} from "react";
// import "./MyNavBar.css";
import Button from "react-bootstrap/Button";
// import Row from "react-bootstrap/Row";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import SearchContext from '../../utils/SearchContext';
// import { searchMovies } from '../../utils/API';
// // import Col from "react-bootstrap/Col";
// import Container from "react-bootstrap/Container";


const NavBar = () => {
  const [searchMovie, setSearchMovie] = useState([{
    term:""
  }]);

  const handleInputChange = event => {
    const newValue = event.target.value;
    setSearchMovie({term: newValue});
  }

  const handleSumbit = async (event) => {
    event.preventDefault();
    // const getSearchResults = async () => {
    //   const res = await searchMovies(searchMovie);
    //   setSearchResults(res);
    //   console.log(res);
    // };
    // await getSearchResults();
  }

  return (
    <SearchContext.Provider value={{term:searchMovie}}>
      <Navbar bg="dark" variant="dark" className="justify-content-between">
          <Navbar.Brand href="#home">Reel Junkies</Navbar.Brand>
          <Form inline value={searchMovie} onSubmit={handleSumbit}>
            <FormControl onChange={handleInputChange} type="text" placeholder="Search" className="mr-sm-2 justify-content-center"/>
            <Button variant="outline-info" onClick={handleSumbit}>Search</Button>
          </Form>
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </SearchContext.Provider>
  );
};

export default NavBar;
