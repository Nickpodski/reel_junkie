import React, { useState, useEffect } from "react";
import "./MovieSearch.css";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { getRunTime } from "../../utils/API";

function MovieSearch(props) {
  const { user, notifyError, notifySuccess } = props;
  const [moreResults, setMoreResults] = useState(false);
  // const [propsMoreResults] = useReducer(props.isMoreResults);

  let history = useHistory();
  const checkMoreResults = () => {
    props.onClick();
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if (props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  };

  const backToTop = () => {
    window.scrollTo(0, 0);
  };

  const renderButtons = (id, index) => {
    const mW = props.user.movies_watched;
    const mWL = props.user.watchlist;
    if (mW.some(e => e.movie_id === id)) {
      return (
        <Row className="row2" noGutters={true}>
          <Col>
            <h5 className="seen">You've Seen This movie!</h5>
          </Col>
        </Row>
      )
    } else if (mWL.some(e => e.movie_id === id)) {
      return (
        <Row className="row2" noGutters={true}>
          <Col>
            <Button
              className="watched-btn ml-2 mr-2"
              variant="success"
              value={index}
              onClick={(e) => addMovieWatched(e)}
            >
              Have Watched
          </Button>
          </Col>
        </Row>
      )
    } else {
      return (
        <Row className="row2" noGutters={true}>
          <Col>
            <Button
              className="watched-btn ml-2 mr-2"
              variant="success"
              value={index}
              onClick={(e) => addMovieWatched(e)}
            >
              Have Watched
          </Button>
            <Button
              variant="danger"
              value={index}
              onClick={(e) => addMovieWatchList(e)}
            >
              + To Movie List
      </Button>
          </Col>
        </Row>

      )
    }
  }

  const addMovieWatched = async (e) => {
    if (!user.isLoggedIn) {
      history.push('/login');
    } else {
      const index = e.target.value;
      const movie = props.results[index];
      const genres = movie.genres;
      const title = movie.title;
      const email = user.email;
      const id = movie.id;
      const poster = movie.poster;
      const runTime = await getRunTime(id);
      const movieData = {
        "title": title,
        "movie_id": id,
        "movie_genres": genres,
        "poster": poster,
        "movie_runtime": runTime,
      }
      const moviesWatched = props.user.movies_watched;
      const movieWatchList = user.watchlist;
      if (movieWatchList.some(e => e.movie_id === id)) {
        let index = movieWatchList.findIndex(p => p.movie_id === id);
        movieWatchList.splice(index, 1);
        props.setUserMW(user);
        addMovieWLReq(email, movieWatchList);
      }
      if (moviesWatched.some(e => e.movie_id === id)) {
        console.log(`You've alredy watched this movie`);
      } else {
        moviesWatched.push(movieData);
        props.setUserMW(user);
        addMovieHWLReq(email, moviesWatched);
      }
    }
  };

  const addMovieHWLReq = (email, moviesWatched) => {
    axios.put('/api/user/addmoviewatched', { email, moviesWatched })
          .then(res => {
            notifySuccess(res.data.message);
          })
          .catch((error) => {
            if (error.response) {
              notifyError(error.response.data.message);
            } else if (error.request) {
              notifyError('Server connection Issue!');
            } else {
              notifyError(error.message);
            }
          })
  }

  const addMovieWatchList = (e) => {
    if (!user.isLoggedIn) {
      history.push('/login');
    } else {
      const index = e.target.value;
      const movie = props.results[index];
      const genres = movie.genres;
      const title = movie.title;
      const email = user.email;
      const id = movie.id;
      const poster = movie.poster;
      const movieData = {
        "title": title,
        "movie_id": id,
        "movie_genres": genres,
        "poster": poster,
      }
      const movieWatchList = user.watchlist;
      if (movieWatchList.some(e => e.movie_id === id)) {
        console.log("Already on your watchlist!");
      } else {
        movieWatchList.push(movieData);
        props.setUserMW(user);
        addMovieWLReq(email, movieWatchList);
      }
    }
  };

  const addMovieWLReq = (email, movieWatchList) => {
    axios.put('/api/user/addmoviewatchlist', { email, movieWatchList })
    .then(res => {
      notifySuccess(res.data.message);
    })
    .catch((error) => {
      if (error.response) {
        notifyError(error.response.data.message);
      } else if (error.request) {
        notifyError('Server connection Issue!');
      } else {
        notifyError(error.message);
      }
    })
  }

  useEffect(() => {
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if (props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  }, [props.currentPage, props.totalPages]);

  const renderResults = props.results.map((item, index) => {
    return (
      <Container
        id={index}
        className="p-5 "
        key={index}
      // onClick={handleMovieClick}
      >
        <Card className="card">
          <Row className="row1" noGutters={true}>
            <Col className="col" md={2}>
              <Card.Img
                className="card-img"
                src={item.poster}
                alt={item.title}
                style={{ width: "15rem" }}
                onError={(e) =>{e.target.onerror = null; e.target.src="./images/reel-junkie-logo-2.jpg"}}
              />
            </Col>
          </Row>

          {renderButtons(item.id, index)}

          <Row>
            <Col className="col" md={12}>
              <Card.Body className="card-desc">
                <Card.Title>{item.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {item.releaseDate}
                </Card.Subtitle>
                <Card.Text>{item.overview}</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  });
  return (
    <>
      <Container fluid={true}>
        {renderResults}
        {moreResults ? (
          <Button
            variant="warning"
            size="lg"
            block
            className="results-btn mb-5"
            onClick={checkMoreResults}
          >
            More Results
          </Button>
        ) : (
          <Button
            variant="warning"
            size="lg"
            block
            className="results-btn mb-5"
            onClick={backToTop}
          >
            Back To Top
          </Button>
        )}
      </Container>
    </>
  );
}

export default MovieSearch;
