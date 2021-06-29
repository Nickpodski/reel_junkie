import React, { useEffect, useState } from "react";
import "./App.css";
import { Redirect, Route, Switch, useLocation , useHistory} from "react-router-dom";
import Navbar from "./components/NavBar/MyNavBar";
import MoviesInCarousel from "./components/MoviesInCarousel/MoviesInCarousel";
import MovieSearch from "./components/MovieSearch/MovieSearch";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer"
import Credits from "./components/Credits/Credits";
import { fetchTotalPages, searchMovies } from "../src/utils/API";
import Register from "./components/Register/Register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useCheckMobileScreen from "./utils/useCheckMobileScreen";

function App() {
  const [searchMovie, setSearchMovie] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState([]);
  const [currentPage, setCurrentPage] = useState();
  const isMobile = useCheckMobileScreen();
  const location = useLocation();
  let history = useHistory();

  const notifyError = (mes) => {
    toast.error(mes, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }); 
  }

  const notifySuccess = (mes) => {
    toast.success(mes, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    if(!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null;
    }
    return item.value;
  }

  const [userData, setUserData] = useState(getWithExpiry('userData') || {
    email: "",
    movies_watched: [],
    watchlist:[],
    isLoggedIn: false
  });

  useEffect(() => {
    setWithExpiry('userData', userData, 3600000);
  }, [userData]);

  const handleInputChange = (event) => {
    const newValue = event.target.value;
    setSearchMovie(newValue);
  };

  const setWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    }
    localStorage.setItem(key, JSON.stringify(item));
  }

  const moreResultsClick = async () => {
    console.log("is this triggering?");
    let p = currentPage;
    let newPage = p + 1;
    setCurrentPage(currentPage + 1);
    const res = await searchMovies(searchMovie, newPage);
    const newSearchRes = searchResults.concat(res);
    setSearchResults(newSearchRes);
  };

  const getSearchResults = async (page, search) => {
    const res = await searchMovies(search, page);
    if (res) {
      setSearchResults(res);
    }
  };

  const getTotalPages = async (search) => {
    const res = await fetchTotalPages(search);
    setTotalPages(res);
  };

  const saveUserMoviesWatched = (data) => {
    setUserData({
      email: data.email,
      movies_watched: data.movies_watched,
      watchlist: data.watchlist,
      isLoggedIn: true
    });
  };

  const handleSumbit = () => {
    window.scrollTo(0, 0);
    setCurrentPage(1);
    getSearchResults(1, searchMovie);
    getTotalPages(searchMovie);
  };

  const saveUserData = (data) => {
    setUserData({
      email: data.user.email,
      movies_watched: data.user.movies_watched,
      watchlist: data.user.watchlist,
      isLoggedIn: true
    });
  }

  const updateUserData = (data) => {
    setUserData({
      email: data.email,
      movies_watched: data.movies_watched,
      watchlist: data.watchlist,
      isLoggedIn: true
    });
  }


  return (
      <div>
          <Navbar onChange={handleInputChange} onSubmit={handleSumbit} user={userData} logout={setUserData} notifySuccess={notifySuccess}/>
          <div>
            <Switch>
              <Route exact path={["/", "/home"]}>
                <MoviesInCarousel 
                isMobile={isMobile}
                setSearchMovie={setSearchMovie}
                search={getSearchResults}
                getTotalPages={getTotalPages}
                setCurrentPage={setCurrentPage}
                />
              </Route>
              <Route exact path={["/login"]}>
                <Login 
                saveUserData={saveUserData} 
                notifyError={notifyError}
                notifySuccess={notifySuccess}
                updateUserData={updateUserData}
                />
              </Route>
              <Route exact path={["/register"]}>
                <Register 
                notifyError={notifyError}
                notifySuccess={notifySuccess} 
                />
              </Route>
            <Route exact path={["/moviesearch"]}>
            <MovieSearch
                results={searchResults}
                currentPage={currentPage}
                onClick={moreResultsClick}
                totalPages={totalPages}
                user={userData}
                setUserMW={saveUserMoviesWatched}
                notifyError={notifyError}
                notifySuccess={notifySuccess} 
              />
            </Route>
            <Route exact path={["/profile"]}>
              {userData.isLoggedIn 
              ? ( <Profile 
                user={userData} 
                setUserMW={saveUserMoviesWatched}
                notifyError={notifyError}
                notifySuccess={notifySuccess}
                setSearchMovie={setSearchMovie}
                search={getSearchResults}
                getTotalPages={getTotalPages}
                setCurrentPage={setCurrentPage}
                history={history}
                /> ) 
              : ( <Redirect to='/login' />)
              }
            </Route>
            <Route exact path={["/credits"]}>
              <Credits />
            </Route>
          </Switch>
          {location.pathname === '/credits'
          ? ""
          : ( <Footer history={history}/> )
          }
        </div>
       <ToastContainer />
    </div>
  );
}

export default App;
