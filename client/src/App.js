import React from 'react';
import './App.css';
import Navbar from './components/NavBar/MyNavBar';
import MoviesInCarousel from './components/MoviesInCarousel/MoviesInCarousel';
import MovieSearch from './components/MovieSearch/MovieSearch';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      <Navbar />
        {/* Added below code for testing */}
        <MoviesInCarousel />
        <Login />
        <MovieSearch />
        <Profile />
    </div>

  );
}

export default App;
