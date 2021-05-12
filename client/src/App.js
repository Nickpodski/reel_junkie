import React from 'react';
import './App.css';
import Navbar from './components/NavBar/MyNavBar';
import TiffsTemporaryComponent from "./components/homePage/TiffsTemporaryComponent"
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      <Navbar />
        {/* Added below code for testing */}
        <TiffsTemporaryComponent />
    </div>

  );
}

export default App;
