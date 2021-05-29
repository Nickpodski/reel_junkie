import React, { useState, useEffect } from "react";
import "./MoviesInCarousel.css";
import Carousel from "react-bootstrap/Carousel";
import { moviesPlayingNow } from "../../utils/API";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

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
      <Carousel.Item key={index} className="carousel-border">
        <img className="d-block w-100" src={item.backPoster} alt={item.title} />
        <Carousel.Caption>
          <h3>{item.title}</h3>
          <p>{item.overview}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });
  return (
    <>
      <div>
        <Container className="justify-content-center  d-flex">
          <Image
            className="now-showing p-5"
            src="./images/Now_Showing_New.png"
          />
        </Container>

        <Container>
          <Carousel fade>{moviesInCarousel}</Carousel>
        </Container>
      </div>
    </>
  );
};

export default MoviesInCarousel;
