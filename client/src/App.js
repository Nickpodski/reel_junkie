import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/NavBar/MyNavBar";
import MoviesInCarousel from "./components/MoviesInCarousel/MoviesInCarousel";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { searchMovies } from "../src/utils/API";
import Register from "./components/Register/Register";
// import { fetchMovies } from "../src/utils/API";

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchMovie(newValue);
    console.log(searchMovie);
  };

  const handleSumbit = () => {
    const getSearchResults = async () => {
      const res = await searchMovies(searchMovie);
      setSearchResults(res);
      console.log(res);
    };
    getSearchResults();
  };

  return (
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
              <MovieSearch results={searchResults} />
            </Route>
            <Route exact path={["/profile"]}>
              <Profile />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
