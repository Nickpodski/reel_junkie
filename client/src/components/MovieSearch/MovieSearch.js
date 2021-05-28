import React, { useState, useEffect } from "react";
import "./MovieSearch.css";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

function MovieSearch(props) {
  const { user } = props;
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

  const addMovieWatched = (e) => {
    const index = e.target.value;
    const movie = props.results[index];
    const title = movie.title;
    const email = user.email;
    const id = movie.id;
    const movieData = {
      "title":title,
      "movie_id":id
    }
    const moviesWatched = props.user.movies_watched;
    if (moviesWatched.some(e => e.movie_id === id)) {
      console.log(`You've alredy watched this movie`);
    } else {
      moviesWatched.push(movieData);
      console.log(moviesWatched);
      props.setUserMW(user);
      axios.put('/api/user/addmoviewatched', { email, moviesWatched })
        .then(res => {
          console.log(res);
          console.log(res.data);
        })
        .catch((error) => {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
        })
    }
  };

  const addMovieWatchList = (e) => {
    const index = e.target.value;
    const movie = props.results[index];
    console.log(movie);
  };

  useEffect(() => {
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if (props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  }, [props.currentPage, props.totalPages]);

  // const handleMovieClick = (e) => {
  //   e.preventDefault();
  //   const index = e.currentTarget.id;
  //   const movie = props.results[index];
  //   history.push("/moviedisplay");
  //   props.clickMovieRender(movie);
  // };

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
              />
            </Col>
          </Row>

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
