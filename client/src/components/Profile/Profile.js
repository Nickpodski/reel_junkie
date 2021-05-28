import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Badge from "react-bootstrap/Badge";
import Media from "react-bootstrap/Media";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from 'react-bootstrap/Image';
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


      // _id:count
      this.setState({ badgeCounts: badgeCounts.data });
      console.log(badgeCounts.data)
      // console.log(badgeCounts.data[0].count)
      // =1 (as it should)
      // if id# had count = 10
      for (let key in badgeCounts.data) {
        let value = badgeCounts.data[key];
        console.log(value.count);
        // let idCount = value.count;
        if (value.count === 2) {
          console.log(value._id + "genreID")
        }
      }

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
        <Container className="badgeContainer">
          {this.state.badgeCounts.map((value) => {
            console.log(value._id);
            console.log(value.count);
            // let dataArr = [];
            // // for (let key in badgeCounts.data) {
            // //   let value = badgeCounts.data[key];
            // //   console.log(value.count);
            //   // let idCount = value.count;
            if (value.count === 10) {
              console.log(value._id + " genreID")

              switch (value._id) {
                // && genId.count = 1
                // or do case for if id_28 =10 display this icon
                case 28:
                  return <Image className="test p-2" src="./badges/action-rambo.png" />;
                case 12:
                  return <Image className="test p-2" src="./badges/adventure-map.png" />;
                case 16:
                  return <Image className="test p-2" src="./badges/animation-mouseToy.png" />;
                case 35:
                  return <Image className="test p-2" src="./badges/comedy-lolCat.png" />;
                case 80:
                  return <Image className="test p-2" src="./badges/crime-handcuffs.png" />;
                case 99:
                  return <Image className="test p-2" src="./badges/documentary-camera.png" />;
                case 18:
                  return <Image className="test p-2" src="./badges/drama-skull.png" />;
                case 10751:
                  return <Image className="test p-2" src="./badges/family-badge.png" />;
                case 14:
                  return <Image className="test p-2" src="./badges/fantasy-wizard.png" />;
                case 36:
                  return <Image className="test p-2" src="./badges/history-columns.png" />;
                case 27:
                  return <Image className="test p-2" src="./badges/horror-knife.png" />;
                case 10402:
                  return <Image className="test p-2" src="./badges/musical-notes.png" />;
                case 9648:
                  return <Image className="test p-2" src="./badges/mystery-sherlock.png" />;
                case 10749:
                  return <Image className="test p-2" src="./badges/romance-heartMail.png" />;
                case 878:
                  return <Image className="test p-2" src="./badges/sci-fi-laserGun.png" />;
                case 10770:
                  return <Image className="test p-2" src="./badges/tv-movie-tv.png" />;
                case 53:
                  return <Image className="test p-2" src="./badges/thriller-rollerCoaster.png" />;
                case 10752:
                  return <Image className="test p-2" src="./badges/war-helmut.png" />;
                case 37:
                  return <Image className="test p-2" src="./badges/western-sheriffStar.png" />;
                default:
                  return "";
                // always display ticket icon
              }
            }
          })}
        </Container>
        <Container>
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Description">
              <h3>Your Email: {this.props.user.email}</h3>
              <h5>Movies Wached: {this.props.user.movies_watched.length}</h5>
              <h5>Movies on Watchlist: {this.props.user.watchlist.length}</h5>
            </Tab>
            <Tab eventKey="Movies Watched" title="Movies Watched">
              {this.props.movies_watched_length > 0 
              ? ( this.props.movies_watched )
              : ( <h5>Go watch some movies and tell us about it!</h5>)
              }
            </Tab>
            <Tab eventKey="Watch List" title="Watch List">
              {this.props.movies_watchlist > 0 
              ? ( this.props.watchlist )
              : ( <h5>Go find some movies to add to your watchlist!</h5>)
              }
            </Tab>
            {/* <Tab eventKey="Reviews" title="Reviews"></Tab> */}
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Profile;
