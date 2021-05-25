import React, { useState, useEffect } from 'react';
import "./MovieSearch.css";
import { Card, Row, Col, Container, Button, } from "react-bootstrap";

function MovieSearch(props) {
  const [moreResults, setMoreResults] = useState(false);
  // const [propsMoreResults] = useReducer(props.isMoreResults);

  const checkMoreResults = () => {
    props.onClick();
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if(props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  }

  useEffect(() => {
    if (props.currentPage < props.totalPages) {
      setMoreResults(true);
    } else if(props.currentPage >= props.totalPages) {
      setMoreResults(false);
    }
  }, [props.currentPage, props.totalPages])



  const renderResults = props.results.map((item, index) => {
    return(
      <Card key={index}>
      <Row noGutters={true}>
        <Col md={2}>
          <Card.Img src={item.poster} alt={item.title} style={{width:'6rem'}}/>
        </Col>
        <Col md={10}>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">{item.releaseDate}</Card.Subtitle>
            <Card.Text>{item.overview}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
    )
  })
    return (
      <>
        <Container fluid={true}>
          {renderResults}
          {moreResults
          ? <Button onClick={checkMoreResults}>More Results</Button>
          : <p>End of the Line!</p>
          }
        </Container>
      </>
    );
}

export default MovieSearch;

