import React from 'react'
import "./MovieSearch.css"
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

function MovieSearch() {
    return (
      <>
    <Container>
    <Image src="holder.js/100px250" fluid />
    <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
    <Tab eventKey="description" title="Descripton">

            
            </Tab>
            <Tab eventKey="Reviews" title="Reviews">
              
            </Tab>
            <Tab eventKey="Cast" title="Cast">
            
            </Tab>
            <Tab eventKey="Add to Watch List" title="Contact">
            
            </Tab>
            <Tab eventKey="Add to Watched List" title="Contact">
            
            </Tab>
            <Tab eventKey="Streaming" title="Streaming">
            
            </Tab>
          </Tabs>

    </Container>
    </>
    );
}

export default MovieSearch;

