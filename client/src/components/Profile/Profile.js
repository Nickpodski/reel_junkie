import React from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Media from "react-bootstrap/Media";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import axios from "axios";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Profile extends React.Component {
  state = {
    badgeCounts: [],
  };
  // need class component
  componentDidMount() {
    this.getBadgeCount();
  }

  renderMoviesWatched = this.props.user.movies_watched.map((item, index) => {
    return <h5 key={index}>{item.title}</h5>;
  });

  renderMovieWatchList = this.props.user.watchlist.map((item, index) => {
    return <h5 key={index}>{item.title}</h5>;
  });

  getBadgeCount = () => {
    axios.get("api/badge/badgeidcount").then((badgeCounts) => {
      // _id:count
      this.setState({ badgeCounts: badgeCounts.data });
      // console.log(badgeCounts.data[0].count)
      // =1 (as it should)
      // if id# had count = 10
      for (let key in badgeCounts.data) {
        let value = badgeCounts.data[key];
        // let idCount = value.count;
        if (value.count === 10) {
          console.log(value._id + "genreID");
        }
      }
    });
  };
  render() {
    return (
      <>
        <Row xs={1} md={2} className="m-0">
          <Col className="profileImageCol">
            <Container className="p-4">
              <Media className="justify-content-center">
                <img
                  width={250}
                  height={250}
                  className=" image-cont mr-3 mt-4 mb-2"
                  src="https://cdn.pixabay.com/photo/2014/03/25/15/24/movie-296751__340.png"
                  alt=""
                />
              </Media>
            </Container>
          </Col>
          <Col className="pt-5 badgeCol">
            <Container className="pb-2 usersName">
              <h2>{this.props.user.email}</h2>
            </Container>
            <Container className="badgeContainer">
              <Tippy
                className="tippy"
                content="Sustenance for a dedicated movie watcher! Here's your first badge, just for being a Reel Junkie! "
              >
                <Image className="badgeIcon p-2" src="./badges/popcorn.png" />
              </Tippy>
              {this.state.badgeCounts.map((value) => {
                if (value.count >= 15) {
                  switch (parseInt(value._id)) {
                    case 28:
                      return (
                        <Tippy
                          className="tippy"
                          content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie?  You earned this badge for watching 15 action movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/action-rambo.png"
                          />
                        </Tippy>
                      );
                    case 12:
                      return (
                        <Tippy
                          className="tippy"
                          content="No Ticket! How bout a badge?
                   You earned this badge for watching 15 adventure movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/adventure-map.png"
                          />
                        </Tippy>
                      );
                    case 16:
                      return (
                        <Tippy
                          className="tippy"
                          content="It's the perfect time to be hysterical! 
                     You earned this badge for watching 15 animated movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/animation-mouseToy.png"
                          />
                        </Tippy>
                      );
                    case 35:
                      return (
                        <Tippy
                          className="tippy"
                          content="The badge has to be at least...three times bigger than this. 
                    You earned this badge for watching 15 comedies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/comedy-lolCat.png"
                          />
                        </Tippy>
                      );
                    case 80:
                      return (
                        <Tippy
                          className="tippy"
                          content="I'm gonna make you an offer you can't refuse...
                    this badge for watching 15 crime movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/crime-handcuffs.png"
                          />
                        </Tippy>
                      );
                    case 99:
                      return (
                        <Tippy
                          className="tippy"
                          content="See the Reel Junkie in their natural habitat, notice how they graze the popcorn. 
                    You earned this badge for watching 15 documentaries."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/documentary-camera.png"
                          />
                        </Tippy>
                      );
                    case 18:
                      return (
                        <Tippy
                          className="tippy"
                          content="To watch or not to watch? Was there ever really a question?  You earned this badge for watching 15 dramas."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/drama-skull.png"
                          />
                        </Tippy>
                      );
                    case 10751:
                      return (
                        <Tippy
                          className="tippy"
                          content="No awkwardness on this couch! You earned this badge for watching 15 family movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/family-badge.png"
                          />
                        </Tippy>
                      );
                    case 14:
                      return (
                        <Tippy
                          className="tippy"
                          content="...there’s some badges in this world, Reel Junkie… and they're worth watching for.” You earned this badge for watching 15 fantasy movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/fantasy-wizard.png"
                          />
                        </Tippy>
                      );
                    case 36:
                      return (
                        <Tippy
                          className="tippy"
                          content="Veni, vidi...I earned a badge. You earned this badge for watching 15 history movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/history-columns.png"
                          />
                        </Tippy>
                      );
                    case 27:
                      return (
                        <Tippy
                          className="tippy"
                          content="Brains- I mean Badges! You earned this badge for watching 15 horror movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/horror-knife.png"
                          />
                        </Tippy>
                      );
                    case 10402:
                      return (
                        <Tippy
                          className="tippy"
                          content="Singoutcuzyouearnedabadgeandcanbebragadocious! You earned this badge for watching 15 musicals."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/musical-notes.png"
                          />
                        </Tippy>
                      );
                    case 9648:
                      return (
                        <Tippy
                          className="tippy"
                          content="With (or without) a shadow of a doubt, you earned this badge for watching 15 mysteries."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/mystery-sherlock.png"
                          />
                        </Tippy>
                      );
                    case 10749:
                      return (
                        <Tippy
                          className="tippy"
                          content="You've got badge.
                         You earned this badge for watching 15 ramantic movies"
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/romance-heartMail.png"
                          />
                        </Tippy>
                      );
                    case 878:
                      return (
                        <Tippy
                          className="tippy"
                          content="In space no can hear you scream, 'I got a badge!' You earned this badge for watching 15 sci-fi movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/sci-fi-laserGun.png"
                          />
                        </Tippy>
                      );
                    case 10770:
                      return (
                        <Tippy
                          className="tippy"
                          content="Why leave the couch? No, seriously? You earned this badge for watching 15 made-for-tv movies."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/tv-movie-tv.png"
                          />
                        </Tippy>
                      );
                    case 53:
                      return (
                        <Tippy
                          className="tippy"
                          content="You're gonna need a bigger badge!-holder, that is.
                    You earned this badge for watching 15 thrillers."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/thriller-rollerCoaster.png"
                          />
                        </Tippy>
                      );
                    case 10752:
                      return (
                        <Tippy
                          className="tippy"
                          content="Man, I love the smell of popcorn in the movie theater.
                         You earned this badge for watching 15 war movies"
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/war-helmut.png"
                          />
                        </Tippy>
                      );
                    case 37:
                      return (
                        <Tippy
                          className="tippy"
                          content="You see, in this world, there’s two kinds of people, my friend; those without Screen Junkie accounts and those who save movies thay dig. You dig? You earned this badge for watching 15 westerns."
                        >
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/western-sheriffStar.png"
                          />
                        </Tippy>
                      );
                    default:
                      return "";
                    // always display ticket icon
                  }
                } else {
                  return "";
                }
              })}
            </Container>
          </Col>
        </Row>
        <Container className="cont-tab p-5">
          <Tabs className="tabs" defaultActiveKey="description">
            <Tab className="tab" eventKey="description" title="Description">
              <h3 className="text">Your Email: {this.props.user.email}</h3>
              <h5 className="text">
                Movies Wached: {this.props.user.movies_watched.length}
              </h5>
              <h5 className="text">
                Movies on Watchlist: {this.props.user.watchlist.length}
              </h5>
            </Tab>
            <Tab
              className="tab"
              variant="warning"
              eventKey="Movies Watched"
              title="Movies Watched"
            >
              {this.props.user.movies_watched.length > 0 ? (
                this.renderMoviesWatched
              ) : (
                <h5>Go watch some movies and tell us about it!</h5>
              )}
            </Tab>
            <Tab className="tab" eventKey="Watch List" title="Watch List">
              {this.props.user.watchlist.length > 0 ? (
                this.renderMovieWatchList
              ) : (
                <h5>Go find some movies to add to your watchlist!</h5>
              )}
            </Tab>
            {/* <Tab eventKey="Reviews" title="Reviews"></Tab> */}
          </Tabs>
        </Container>
      </>
    );
  }
}

export default Profile;
