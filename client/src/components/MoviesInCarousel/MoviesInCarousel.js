import React, { useState, useEffect } from "react";
import "./MoviesInCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { moviesPlayingNow } from "../../utils/API";

const MoviesInCarousel = () => {

  const [nowPlaying, setNowPlaying] = useState([]);
  useEffect(() => {
    const getNowPlaying = async () => {
      const items = await moviesPlayingNow();
      setNowPlaying(items);
    };
    getNowPlaying();
  }, []);
const moviesInCarousel = nowPlaying.map((item, index) => {
  return (
    
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={item.backPoster}
        alt={item.title}
      />
      <Carousel.Caption>
        <h3>{item.title}</h3>
        <p>{item.overview}</p>
      </Carousel.Caption>
    </Carousel.Item>
  )
})
  return (
    <div>
      <Carousel fade>
      {moviesInCarousel}
      </Carousel>
     </div>
  );
};

export default MoviesInCarousel;
