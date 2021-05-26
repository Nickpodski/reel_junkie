import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/MyNavBar";
import MoviesInCarousel from "./components/MoviesInCarousel/MoviesInCarousel";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { fetchTotalPages, searchMovies } from "../src/utils/API";
import Register from "./components/Register/Register";
import Buttons from "./components/Buttons/Buttons";

import { UserProvider } from "./utils/UserContext";
// import { fetchMovies } from "../src/utils/API";

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState();
 
  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchMovie(newValue);
  };

  const moreResultsClick = async () => {
    console.log("is this triggering?")
    let p = currentPage;
    let newPage = p + 1;
    setCurrentPage(currentPage + 1);
    const res = await searchMovies(searchMovie, newPage);
    const newSearchRes = searchResults.concat(res);
    setSearchResults(newSearchRes);
  }

  const getSearchResults = async (page) => {
    const res = await searchMovies(searchMovie, page);
    setSearchResults(res);
  };

  const getTotalPages = async () => {
    const res = await fetchTotalPages(searchMovie);
    setTotalPages(res);
  };

  const handleSumbit = () => {
    window.scrollTo(0, 0);
    setCurrentPage(1);
    getSearchResults(1);
    getTotalPages();
  };

  const addMovie = (e) => {
    const genreArr = e.target.value.split(",");
console.log(genreArr)
    genreArr.forEach(genre_id => {
      parseInt(genre_id);
      // const movieObj = {
      //   _id: genre_id,
      //   title: "Up"
      // }
      console.log(genre_id)


    })
  }

  return (
    <UserProvider>
      <div>
        <Router>
          <Navbar onChange={handleInputChange} onSubmit={handleSumbit} />
          <div>
            <Switch>
              <Route exact path={["/", "/home"]}>
                <MoviesInCarousel />
              </Route>
              <Route exact path={["/login"]}>
                <Login />
              </Route>
              <Route exact path={["/register"]}>
                <Register />
              </Route>
            <Route exact path={["/moviesearch"]}>
              <MovieSearch results={searchResults} currentPage={currentPage}  onClick={moreResultsClick} totalPages={totalPages} addMovie={addMovie}/>
            </Route>
            <Route exact path={["/profile"]}>
              <Profile />
              <Buttons />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
    </UserProvider>
  );
}

export default App;
