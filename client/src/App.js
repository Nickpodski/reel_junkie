import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from './components/NavBar/MyNavBar';
import MoviesInCarousel from './components/MoviesInCarousel/MoviesInCarousel';
import MovieSearch from './components/MovieSearch/MovieSearch';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import { fetchTotalPages, searchMovies } from '../src/utils/API';
// import { fetchMovies } from "../src/utils/API";


function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState([0]);
  const [totalPages, setTotalPages] = useState([]);
  const [active, setActive] = useState([]);

  const handlePageClick = () => {
    console.log("test");
  }

  const handleInputChange = event => {
    const newValue = event.target.value;
    setSearchMovie(newValue);
  }

  const getSearchResults = async () => {
    const res = await searchMovies(searchMovie, pageNumber);
    setSearchResults(res);
  };

  const getTotalPages = async () => {
    const res = await fetchTotalPages(searchMovie);
    setTotalPages(res);

    setActive(1);
  }
  
  const handleSumbit = async () => {
    await getSearchResults();
    await getTotalPages();
  }

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
            <Route exact path={["/moviesearch", "/moviesearch/"]}>
              <MovieSearch results={searchResults} pages={totalPages} setActive={setActive} currentActive={active}/>
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
