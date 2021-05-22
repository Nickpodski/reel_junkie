import React, { useEffect, useState } from 'react';
import "./MovieSearch.css";
import { Card, Row, Col, Container, } from "react-bootstrap";
import PaginationItems from '../PaginationItems/PaginationItems';

function MovieSearch(props) {
  const [activePage, setActivePage] = useState([]);

  useEffect(() => {
    setActivePage(props.active);
    props.setActive(activePage);
  })

  const pageItemClick = (e) => {
    console.log("testing!");
    props.handlePageClick(e)
  }

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
  });
    return (
      <>
        <Container fluid={true}>
          <Container>
            <Row className="justify-content-sm-center m-5">
              <PaginationItems pages={props.pages}/>
            </Row>
          </Container>
          {renderResults}
          <Container fluid={true}>
            <Row className="justify-content-md-center m-5">
              <PaginationItems 
              pages={props.pages} 
              setActivePage={setActivePage} 
              active={props.currentActive}
              />
            </Row>
          </Container>
        </Container>
      </>
    );
}

export default MovieSearch;

