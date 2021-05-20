import React, {useContext, useEffect, useState} from 'react';
import "./MovieSearch.css";
import { Card, Row, Col, Container, } from "react-bootstrap";
import { searchMovies } from '../../utils/API';
import SearchContext from '../../utils/SearchContext';

function MovieSearch() {
  const {term} = useContext(SearchContext)
  const [ searchResults, setSearchResults] = useState([]);
  


  const renderResults = searchResults.map((item, index) => {
    return(
      <Card>
      <Row noGutters={true}>
        <Col md={2}>
          <Card.Img src={item.backPoster} alt={item.title} style={{width:'6rem'}}/>
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

  const getResults = () => {
    const getSearchResults = async () => {
      const res = await searchMovies(term);
      setSearchResults(res);
      console.log(res);
    };
    getSearchResults();
    return(
      <>
      {renderResults}
      </>
    )
  }
  

    return (
      <>
        <Container fluid={true}>
          {getResults}
        </Container>
      </>
    );
}

export default MovieSearch;

