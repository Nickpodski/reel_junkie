import React from 'react';
import './App.css';
import NavBar from './components/NavBar/MyNavBar';
import TiffsTemporaryComponent from "./components/homePage/TiffsTemporaryComponent"
// import { fetchMovies } from "../src/utils/API";


function App() {
  return (
    <div>
      
      <div className="App">
      <NavBar />
        {/* Added below code for testing */}
        <TiffsTemporaryComponent />
      </div>
    </div>

  );
}

export default App;
