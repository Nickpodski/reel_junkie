import React, { useState, useEffect } from "react";
import "./MovieSearch.css";
import { Card, Row, Col, Container, Button } from "react-bootstrap";

function MovieSearch(props) {
  const [moreResults, setMoreResults] = useState(false);
  // const [propsMoreResults] = useReducer(props.isMoreResults);
  // const [watched, setWatched] = setState();
  
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

  const addMovie = (e) => {
    console.log("heeeere")
    const genreArr = e.target.value.split(",");
    console.log(genreArr)
    genreArr.forEach(genre_id => {
      const idCollection = parseInt(genre_id);
      // const movieObj = {
      //   _id: genre_id,
      //   title: "Up"
      // }
      console.log(idCollection)
      
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
      <Container className="p-5">
        <Card className="card" key={index}>
          <Row className="row" noGutters={true}>
            <Col className="col" md={2}>
              <Card.Img
                className="card-img"
                src={item.poster}
                alt={item.title}
                style={{ width: "15rem" }}
              />
            <Button value={item.genres} onClick={e => addMovie(e)}>Have Watched</ Button>
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
