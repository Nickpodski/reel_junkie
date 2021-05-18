import React from 'react';
import './App.css';
import Navbar from './components/NavBar/MyNavBar';
import MoviesInCarousel from './components/MoviesInCarousel/MoviesInCarousel'
import MovieSearch from './components/MovieSearch/MovieSearch';
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      <Navbar />
        {/* Added below code for testing */}
        <MoviesInCarousel />
    </div>

  );
}

export default App;
