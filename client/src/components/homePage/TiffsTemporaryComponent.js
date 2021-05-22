// I've put All of my temporary "components" into this one file,
// I created the components just to see if they'd render,
// Absolutely change it to what you've created!
// we can paste what we need into the right docs.

import React, { useState, useEffect } from "react";
import {  moviesPlayingNow, fetchGenreList, fetchMoviesByGenre, searchMovies, } from "../../utils/API";


export function Home() {
    const [nowPlaying, setNowPlaying] = useState([]);
    const [genres, setGenres] = useState([]);
    const [moviesByGenre, setMoviesByGenre] = useState([]);
    const [searchAll, setSearch] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setNowPlaying(await moviesPlayingNow());
            setGenres(await fetchGenreList());
            setMoviesByGenre(await fetchMoviesByGenre());
            setSearch(await searchMovies());
        };

        fetchAPI();
    }, []);

    // (API.js - moviesPlayingNow) Movies playing now - goes into carousel (5 movie back-posters)
    const moviesInCarousel = nowPlaying.slice(0, 5).map((item, index) => {
        return ( 
            <div key={index}>
                <ul>
                <img src={item.backPoster} alt={item.title}/>
                <h1>{item.title}</h1>
                </ul>
            </div>
        )
    })

    // (API.js - fetchGenreList) Buttons or list of just movie genres/ can make btn links to pages for each genre
    const genreList = genres.map((item, index) => {
        return (
            <li className="list-inline-item" key={index}>
            <button type="button" className="btn">
            {item.name}
            </button>
            </li>
        );
    });

    // (API.js - fetchMoviesByGenre) returns list of movies (sorted by genre)
    const movieListByGenre = moviesByGenre.slice(0, 4).map((item, index) => {
        console.log(item)
        return (
            <div className="container">
                <div className="card" key={index}>
                <a href={`/movie/${item.id}`} >
                <img className="img-fluid" src={item.poster} alt={item.title}></img>
                </a>
                </div>
            </div>
        )
    })

    // (API.js - searchMovies) have to connect to search bar
    // const searchAllMovies = searchAll.slice(0, 20).map((item, index) => {
    //     return (
    //         <p key={index}>{item}</p>
    //     )
    // })
   

    return (
        <div className="container mw-100">
            {/* <Carousel /> */}
            {moviesInCarousel}
            {genreList}
            {movieListByGenre}
            {/* {searchAllMovies} */}
        </div>

        
    )
    
}


export default Home;