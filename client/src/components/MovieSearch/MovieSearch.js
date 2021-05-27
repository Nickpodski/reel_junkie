import React, { useState, useEffect } from "react";
import "./MovieSearch.css";
import { Card, Row, Col, Container, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";

function MovieSearch(props) {
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
  }

  useEffect(() => {
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if (props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  }, [props.currentPage, props.totalPages]);

  const handleMovieClick = (e) => {
    e.preventDefault();
    const index = e.currentTarget.id;
    const movie = props.results[index];
    history.push("/moviedisplay");
    props.clickMovieRender(movie);
  };

  const renderResults = props.results.map((item, index) => {
    return (
      <Container
        id={index}
        className="p-5 "
        key={index}
        onClick={handleMovieClick}
      >
        <Card className="card">
          <Row className="row" noGutters={true}>
            <Col className="col" md={2}>
              <Card.Img
                className="card-img"
                src={item.poster}
                alt={item.title}
                style={{ width: "15rem" }}
              />
            </Col>
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
