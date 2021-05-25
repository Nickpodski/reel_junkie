import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

function profile() {
  return (
    <div>
      <Container className=" p-5">
      <Media>
        <img
          width={250}
          height={250}
          className="mr-3 mt-5 mb-2"
          src=""
          alt=""
        />
      </Media>
      </Container>
      <Container>
      <Badge variant="primary">Primary</Badge>{" "}
      <Badge variant="secondary">Secondary</Badge>{" "}
      <Badge variant="success">Success</Badge>{" "}
      <Badge variant="danger">Danger</Badge>{" "}
      <Badge variant="warning">Warning</Badge>{" "}
      <Badge variant="info">Info</Badge> <Badge variant="light">Light</Badge>{" "}
      <Badge variant="dark">Dark</Badge>
      <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
        <Tab eventKey="description" title="Description"></Tab>
        <Tab eventKey="Movies Watched" title="Movies Watched"></Tab>
        <Tab eventKey="Watch List" title="Watch List"></Tab>
        <Tab eventKey="Reviews" title="Reviews"></Tab>
      </Tabs>
      </Container>
    </div>
  );
}

export default profile;
