import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/NavBar/MyNavBar';
import MoviesInCarousel from './components/MoviesInCarousel/MoviesInCarousel'
import MovieSearch from './components/MovieSearch/MovieSearch';
import Login from './components/Login/Login';
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      <Router>
        <Navbar>
        <div>
          <Switch>
            <Route exact path={["/", "/home"]}>
              <MoviesInCarousel />
            </Route>
            <Route exact path={["/login"]}>
              <Login />
            </Route>
            <Route exact path={["/moviesearch/"]}>
              <MovieSearch />
            </Route>
          </Switch>
        </div>
        </Navbar>
      </Router>
    </div>

  );
}

export default App;
