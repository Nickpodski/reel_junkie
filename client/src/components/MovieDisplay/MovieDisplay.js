import React from "react";
import "./MovieDisplay.css";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";


function MovieDisplay() {
  return (
    <>
      <Container className="movie-container p-5 d-flex jusitfy-content-center">
        <Image src="holder.js/171x180" thumbnail />
      </Container>
      <Container>
        <div className="m-4">
          <Button className="m-2" variant="warning" size="lg">
            + To Watch List
          </Button>{" "}
          <Button className="m-2" variant="secondary" size="lg">
            I've Seen It!
          </Button>
        </div>
      </Container>
      <Container>
        <Tabs
          variant="warning"
          defaultActiveKey="description"
          id="uncontrolled-tab-example"
        >
          <Tab eventKey="description" title="Description">
            <Container className="para">
              <p className="p-dsiplay">
                gfdksnfdb sdbdfsbfdsbkmbkdsmbi gnofnbtgb
                tinfvifiosbnsbvdojbsnfsbkt
                <br></br>
                bnfdisjgpifjdspgjs
                <br></br>
                gjpdfijbdspobjpojmbspjgspifgj psingepsfreog reop ij gpej gg ep
                gjepg efdgre
              </p>
            </Container>
          </Tab>
          <Tab eventKey="cast" title="Cast">
            <Container className="para">
              <p className="p-dsiplay">Placeholder</p>
            </Container>
          </Tab>
          <Tab eventKey="reviews" title="Reviews">
            <Container className="para">
              <p className="p-dsiplay">Placeholder</p>
            </Container>
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default MovieDisplay;
