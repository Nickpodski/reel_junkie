import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import TiffsTemporaryComponent from "./components/homePage/TiffsTemporaryComponent"
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        {/* Added below code for testing */}
        <TiffsTemporaryComponent />
      </div>
    </div>

  );
}

export default App;
