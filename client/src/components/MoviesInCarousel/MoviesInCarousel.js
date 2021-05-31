import React, { useState, useEffect } from "react";
import "./MoviesInCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { moviesPlayingNow } from "../../utils/API";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import { useHistory } from "react-router-dom";

const MoviesInCarousel = (props) => {
  const { isMobile, setSearchMovie, search, getTotalPages, setCurrentPage } = props;
  const [nowPlaying, setNowPlaying] = useState([]);
  let history = useHistory();
  
  useEffect(() => {
    const getNowPlaying = async () => {
      const items = await moviesPlayingNow();
      setNowPlaying(items);
    };
    getNowPlaying();
  }, []);

  const clickMovie = (index) => {
    const movie = nowPlaying[index];
    const title = movie.title;
    setSearchMovie(title);
    window.scrollTo(0, 0);
    setCurrentPage(1);
    search(1, title);
    getTotalPages(title);
    setTimeout(() => {history.push("/moviesearch");}, 500)
  }
  
  const moviesInCarousel = nowPlaying.map((item, index) => {
    return (
      <Carousel.Item key={index} className="carousel-border" onClick={() => clickMovie(index)}>
        <img className="d-block w-100" src={item.backPoster} alt={item.title} />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  const moviesInCarouselMobile = nowPlaying.map((item, index) => {
    return (
        <Carousel.Item key={index} className="carousel-border" onClick={() => clickMovie(index)}>
          <img className="d-block w-100" src={item.poster} alt={item.title} />
        </Carousel.Item>
    );
  });

  return (
    <>
      <div>
        <Container className="movie-container justify-content-center  d-flex">
          <Image
            fluid
            className="now-showing p-5"
            src="./images/Now_Showing_New.png"
          />
        </Container>

        <Container>
          <Carousel fade>{isMobile
          ? moviesInCarouselMobile
          : moviesInCarousel
        }</Carousel>
        </Container>
      </div>
    </>
  );
};

export default MoviesInCarousel;
