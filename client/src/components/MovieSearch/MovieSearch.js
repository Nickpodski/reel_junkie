import React from 'react'
import "./MoviesInCarousel.css"
import Card from "react-bootstrap/Card"
import Nav from "react-bootstrap/Nav"

function MovieSearch() {
    return (
      <>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Plot</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Add to Watch List</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#disabled">Reviews</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Cast</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Watched</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Streaming</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
        </Card>
      </>
    );
}

export default MovieSearch

