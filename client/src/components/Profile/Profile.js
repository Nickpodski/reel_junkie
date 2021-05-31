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

  addMovieHWLReq = (email, moviesWatched) => {
    axios
      .put("/api/user/addmoviewatched", { email, moviesWatched })
      .then((res) => {
        this.props.notifySuccess(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          this.props.notifyError(error.response.data.message);
        } else if (error.request) {
          this.props.notifyError("Server connection Issue!");
        } else {
          this.props.notifyError(error.message);
        }
      });
  };

  addMovieWLReq = (email, movieWatchList) => {
    axios
      .put("/api/user/addmoviewatchlist", { email, movieWatchList })
      .then((res) => {
        this.props.notifySuccess(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          this.props.notifyError(error.response.data.message);
        } else if (error.request) {
          this.props.notifyError("Server connection Issue!");
        } else {
          this.props.notifyError(error.message);
        }
      });
  };

  removeMHW = (e, index) => {
    e.preventDefault();
    const email = this.props.user.email;
    const MHWlist = this.props.user.movies_watched;
    MHWlist.splice(index, 1);
    this.props.setUserMW(this.props.user);
    this.addMovieHWLReq(email, MHWlist);
  };

  removeWL = (e, index) => {
    e.preventDefault();
    const email = this.props.user.email;
    const MWlist = this.props.user.watchlist;
    MWlist.splice(index, 1);
    this.props.setUserMW(this.props.user);
    this.addMovieWLReq(email, MWlist);
  };

  removeWLAddHWL = (e, index) => {
    e.preventDefault();
    const email = this.props.user.email;
    const MWlist = this.props.user.watchlist;
    const MHWlist = this.props.user.movies_watched;
    const movie = this.props.user.watchlist[index];
    MHWlist.push(movie);
    MWlist.splice(index, 1);
    this.props.setUserMW(this.props.user);
    this.addMovieWLReq(email, MWlist);
    this.addMovieHWLReq(email, MHWlist);
  };

  renderMoviesWatched = () => {
    const render = this.props.user.movies_watched.map((item, index) => {
      return (
        <h5 key={index}>
          {item.title}
          <span 
            className="material-icons-outlined"
            value={index}
            onClick={(e) => this.removeMHW(e, index)}
          >
            clear
          </span>
        </h5>
      );
    });
    return render;
  };

  renderMovieWatchList = () => {
    const render = this.props.user.watchlist.map((item, index) => {
      return (
        <h5 key={index}>
          {item.title}
          <span
            className="material-icons-outlined"
            value={index}
            onClick={(e) => this.removeWL(e, index)}
          >
            clear
          </span>
          <span
            title="Add to Have Watched list"
            className="material-icons-outlined icon"
            value={index}
            onClick={(e) => this.removeWLAddHWL(e, index)}
          >
            drive_file_move
          </span>
        </h5>
      );
    });
    return render;
  };

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
        if (value.count === 2) {
          console.log(value._id + "genreID");
        }
      }
    });
  };
  render() {
    return (
      <div>
        <Container className=" img-container p-5">
          <Media>
            <img
              width={250}
              height={250}
              className=" image-cont mr-3 mt-5 mb-2"
              src=""
              alt=""
            />
          </Media>
          <Container className="badgeContainer">
            {this.state.badgeCounts.map((value) => {
              // let dataArr = [];
              // // for (let key in badgeCounts.data) {
              // //   let value = badgeCounts.data[key];
              // //   console.log(value.count);
              //   // let idCount = value.count;
              if (value.count >= 10) {
                switch (parseInt(value._id)) {
                  // && genId.count = 1
                  // or do case for if id_28 =10 display this icon
                  case 28:
                    return (
                      <Tippy
                        className="tippy"
                        content="You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                         Well, do ya, junkie?  You earned this badge for watching 10 action movies."
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
                   You earned this badge for watching 10 adventure movies."
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
                     You earned this badge for watching 10 animated movies."
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
                    You earned this badge for watching 10 comedies."
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
                    this badge for watching 10 crime movies."
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
                    You earned this badge for watching 10 documentaries."
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
                        content="To watch or not to watch? Was there ever really a question?  You earned this badge for watching 10 dramas."
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
                        content="No awkwardness on this couch! You earned this badge for watching 10 family movies."
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
                        content="...there’s some badges in this world, Reel Junkie… and they're worth watching for.” You earned this badge for watching 10 fantasy movies."
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
                        content="Veni, vidi...I earned a badge. You earned this badge for watching 10 history movies."
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
                        content="Brains- I mean Badges! You earned this badge for watching 10 horror movies."
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
                        content="Singoutcuzyouearnedabadgeandcanbebragadocious! You earned this badge for watching 10 musicals."
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
                        content="With (or without) a shadow of a doubt, you earned this badge for watching 10 mysteries."
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
                         You earned this badge for watching 10 ramantic movies"
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
                        content="In space no can hear you scream, 'I got a badge!' You earned this badge for watching 10 sci-fi movies."
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
                        content="Why leave the couch? No, seriously? You earned this badge for watching 10 made-for-tv movies."
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
                    You earned this badge for watching 10 thrillers."
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
                         You earned this badge for watching 10 war movies"
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
                        content="You see, in this world, there’s two kinds of people, my friend; those without Screen Junkie accounts and those who save movies thay dig. You dig? You earned this badge for watching 10 westerns."
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
        </Container>

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
                this.renderMoviesWatched()
              ) : (
                <h5>Go watch some movies and tell us about it!</h5>
              )}
            </Tab>
            <Tab className="tab" eventKey="Watch List" title="Watch List">
              {this.props.user.watchlist.length > 0 ? (
                this.renderMovieWatchList()
              ) : (
                <h5>Go find some movies to add to your watchlist!</h5>
              )}
            </Tab>
            {/* <Tab eventKey="Reviews" title="Reviews"></Tab> */}
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default Profile;
