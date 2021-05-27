import React, { useState } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Navbar from "./components/NavBar/MyNavBar";
import MoviesInCarousel from "./components/MoviesInCarousel/MoviesInCarousel";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import { fetchTotalPages, searchMovies } from "../src/utils/API";
import Register from "./components/Register/Register";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";

// import { fetchMovies } from "../src/utils/API";

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const [singleMovie, setSingleMovie] = useState([]);
 

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchMovie(newValue);
  };

  // const checkMoreResults = () => {
  //   if (currentPage <= totalPages) {
  //     setIsMoreResults(true);
  //   } else if(currentPage >= totalPages) {
  //     setIsMoreResults(false);
  //   }
  // }

  const moreResultsClick = async () => {
    console.log("is this triggering?");
    let p = currentPage;
    let newPage = p + 1;
    setCurrentPage(currentPage + 1);
    const res = await searchMovies(searchMovie, newPage);
    const newSearchRes = searchResults.concat(res);
    setSearchResults(newSearchRes);
  };

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
    // checkMoreResults();
  };
  
  const clickMovieRender = (movie) => {
    setSingleMovie(movie);
    
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
              <MovieSearch
                results={searchResults}
                currentPage={currentPage}
                onClick={moreResultsClick}
                totalPages={totalPages}
                clickMovieRender={clickMovieRender}
              />
            </Route>
            <Route exact path={["/profile"]}>
              <Profile />
            </Route>
            <Route exact path={["/moviedisplay"]}>
              <MovieDisplay movie={singleMovie} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
