import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import axios from "axios";

class Profile extends React.Component {
  state = {
    badgeCounts: [],
  };
  // need class component
  componentDidMount() {
    this.getBadgeCount();
  }

  getBadgeCount = () => {
    axios.get("api/badge/badgeidcount").then((badgeCounts) => {
      console.log(badgeCounts);
      // console.log(badgeCounts.data._id)
     
    // _id:count
      this.setState({ badgeCounts: badgeCounts.data });
  // console.log(badgeCounts.data[0].count)
  // =1 (as it should)
  // if id# had count = 10
  // for (let key in badgeCounts.data) {
  //   let value = badgeCounts.data[key];
  //   console.log(value.count);
  //   // let idCount = value.count;
  //   if (value.count === 2){
  //     console.log(value._id + "genreID")
  //   }
  // }
    });
    
  };

  // for in?
  //              ^  ???????
  // need to check user badges

  render() {
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
          {this.state.badgeCounts.map((value) => {
            console.log(value.count); 
            // for (let key in badgeCounts.data) {
            //   let value = badgeCounts.data[key];
            //   console.log(value.count);
              // let idCount = value.count;
              if (value.count === 1){
                console.log(value._id + " genreID")
            }
            switch (value._id){
              // && genId.count = 1
              // or do case for if id_28 =10 display this icon
              case 28:
                return <Badge variant="primary">Action</Badge>;
              case 12:
                return <Badge variant="primary">Action</Badge>;
              case 16:
                return <Badge variant="primary">Action</Badge>;
              case 35:
                return <Badge variant="primary">Action</Badge>;
              case 80:
                return <Badge variant="primary">Action</Badge>;
              case 99:
                return <Badge variant="primary">Action</Badge>;
              case 18:
                return <Badge variant="primary">1 Action</Badge>;
              case 10751:
                return <Badge variant="primary">Action</Badge>;
              case 14:
                return <Badge variant="primary">Action</Badge>;
              case 36:
                return <Badge variant="primary">Drama</Badge>;
              case 27:
                return <Badge variant="primary">Thriller</Badge>;
              case 10402:
                return <Badge variant="primary">Animation</Badge>;
              case 9648:
                return <Badge variant="primary">Animation</Badge>;
              case 10749:
                return <Badge variant="primary">Animation</Badge>;
              case 878:
                return <Badge variant="primary">Animation</Badge>;
              case 10770:
                return <Badge variant="primary">Animation</Badge>;
              case 53:
                return <Badge variant="primary">Animation</Badge>;
              case 10752:
                return <Badge variant="primary">Animation</Badge>;
              case 37:
                return <Badge variant="primary">Animation</Badge>;  
              default:
                return "";
              // always display ticket icon
            }
          })}
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
}

export default Profile;
