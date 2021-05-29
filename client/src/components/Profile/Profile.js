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

class Profile extends React.Component {
  state = {
    badgeCounts: [],
  };
  // need class component
  componentDidMount() {
    this.getBadgeCount();
  }

  renderMoviesWatched = this.props.user.movies_watched.map((item, index) => {
    return(
      <h5 key={index}>{item.title}</h5>
    )
  })

  renderMovieWatchList = this.props.user.watchlist.map((item, index) => {
    return(
      <h5 key={index}>{item.title}</h5>
    )
  })

  getBadgeCount = () => {
    axios.get("api/badge/badgeidcount").then((badgeCounts) => {
      console.log(badgeCounts);

      // _id:count
      this.setState({ badgeCounts: badgeCounts.data });
      console.log(badgeCounts.data);
      // console.log(badgeCounts.data[0].count)
      // =1 (as it should)
      // if id# had count = 10
      for (let key in badgeCounts.data) {
        let value = badgeCounts.data[key];
        console.log(value.count);
        // let idCount = value.count;
        if (value.count === 2) {
          console.log(value._id + "genreID");
        }
      }
    });
  };
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
            if (value.count >= 1) {
              console.log(value._id + " genreID");

              switch (value._id) {
                // && genId.count = 1
                // or do case for if id_28 =10 display this icon
                case 28:
                  return (
                    <Tippy 
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                      <Image
                        className="badgeIcon p-2"
                        src="./badges/action-rambo.png"/>
                    </Tippy>
                  );
                case 12:
                  return (
                  <Tippy 
                  content="“No Ticket! How bout a badge?
                   You earned this badge for watching 10 adventure movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/adventure-map.png"/>
                  </Tippy>
                  );
                case 16:
                  return (
                  <Tippy
                    content="It's the perfect time to be hysterical! 
                     You earned this badge for watching 10 animated movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/animation-mouseToy.png"/>
                  </Tippy>
                  );
                case 35:
                  return (
                    <Tippy
                    content="The badge has to be at least...three times bigger than this. 
                    You earned this badge for watching 10 comedy movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/comedy-lolCat.png"/>
                    </Tippy>
                  );
                case 80:
                  return (
                    <Tippy
                    content="I'm gonna make you an offer you can't refuse;
                    This badge for watching 10 crime movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/crime-handcuffs.png"/>
                    </Tippy>
                  );
                case 99:
                  return (
                    <Tippy
                    content="See the Reel Junkie in their natural habitat, notice how the graze the popcorn. 
                    You earned this badge for watching 10 documentaries">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/documentary-camera.png"/>
                    </Tippy>
                  );
                case 18:
                  return (
                    <Tippy
                    content="To watch or not to watch? There was never any question. You earned this badge for watching 10 drama movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/drama-skull.png"
                    />
                    </Tippy>
                  );
                case 10751:
                  return (
                    <Tippy
                    content="No awkwardness on this couch. You earned this badge for watching 10 family movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/family-badge.png"/>
                    </Tippy>
                  );
                case 14:
                  return (
                    <Tippy
                    content="...there’s some badges in this world, Reel Junkie… and they're worth watching for.” You earned this badge for watching 10 fantasy movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/fantasy-wizard.png"/>
                    </Tippy>
                  );
                case 36:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/history-columns.png"/>
                    </Tippy>
                  );
                case 27:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/horror-knife.png"/>
                  </Tippy>
                  );
                case 10402:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/musical-notes.png"/>
                    </Tippy>
                  );
                case 9648:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/mystery-sherlock.png"/>
                    </Tippy>
                  );
                case 10749:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/romance-heartMail.png"/>
                    </Tippy>
                  );
                case 878:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/sci-fi-laserGun.png"/>
                    </Tippy>
                  );
                case 10770:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/tv-movie-tv.png"/>
                    </Tippy>
                  );
                case 53:
                  return (
                    <Tippy
                    content="Son, we live in a world that has badges and those badges have to be earned by those who watch movies. 
                    You earned this badge for watching 10 thriller movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/thriller-rollerCoaster.png"/>
                    </Tippy>
                  );
                case 10752:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/war-helmut.png"/>
                    </Tippy>
                  );
                case 37:
                  return (
                    <Tippy
                    content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie? You earned this badge for watching 10 action movies">
                    <Image
                      className="badgeIcon p-2"
                      src="./badges/western-sheriffStar.png"/>
                    </Tippy>
                  );
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
              {this.props.user.movies_watched.length > 0 
              ? ( this.renderMoviesWatched )
              : ( <h5>Go watch some movies and tell us about it!</h5>)
              }
            </Tab>
            <Tab eventKey="Watch List" title="Watch List">
              {this.props.user.watchlist.length > 0 
              ? ( this.renderMovieWatchList )
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
