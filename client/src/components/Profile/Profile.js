import React, { useEffect, useState } from "react";
import "./Profile.css";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Image from "react-bootstrap/Image";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import { Tooltip, TooltipTrigger, TooltipContent } from "../Tippy/Tippy";


function Profile(props) {
  // state = {
  //   badgeCounts: [],
  // };
  const [badgeCounts, setBadgeCounts] = useState([]);
  // need class component
  // const componentDidMount = () => {
  //   getBadgeCount();
  // }

  useEffect(() => {
    getBadgeCount();
  },);

  // const renderMoviesWatchedStuff = props.user.movies_watched.map((item, index) => {
  //   return <h5 key={index}>{item.title}</h5>;
  // });

  const removeWLAddHWL = (e, index) => {
    e.preventDefault();
    const email = props.user.email;
    const MWlist = props.user.watchlist;
    const MHWlist = props.user.movies_watched;
    const movie = props.user.watchlist[index];
    MHWlist.push(movie);
    MWlist.splice(index, 1);
    props.setUserMW(props.user);
    addMovieWLReq(email, MWlist);
    addMovieHWLReq(email, MHWlist);
  };

  const clickMovieHWL = (e, index) => {
    e.preventDefault();
    const movie = props.user.movies_watched[index];
    const title = movie.title;
    props.setSearchMovie(title);
    window.scrollTo(0, 0);
    props.setCurrentPage(1);
    props.search(1, title);
    props.getTotalPages(title);
    setTimeout(() => { props.navigate("/moviesearch"); }, 500)
  }

  const clickMovieWL = (e, index) => {
    e.preventDefault();
    const movie = props.user.watchlist[index];
    const title = movie.title;
    props.setSearchMovie(title);
    window.scrollTo(0, 0);
    props.setCurrentPage(1);
    props.search(1, title);
    props.getTotalPages(title);
    setTimeout(() => { props.navigate("/moviesearch"); }, 500)
  }

  const addMovieHWLReq = (email, moviesWatched) => {
    axios.put('/api/user/addmoviewatched', { email, moviesWatched })
      .then(res => {
        props.notifySuccess(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          props.notifyError(error.response.data.message);
        } else if (error.request) {
          props.notifyError('Server connection Issue!');
        } else {
          props.notifyError(error.message);
        }
      })
  }

  const addMovieWLReq = (email, movieWatchList) => {
    axios.put('/api/user/addmoviewatchlist', { email, movieWatchList })
      .then(res => {
        props.notifySuccess(res.data.message);
      })
      .catch((error) => {
        if (error.response) {
          props.notifyError(error.response.data.message);
        } else if (error.request) {
          props.notifyError('Server connection Issue!');
        } else {
          props.notifyError(error.message);
        }
      })
  }

  const removeMHW = (e, index) => {
    e.preventDefault();
    const email = props.user.email;
    const MHWlist = props.user.movies_watched;
    MHWlist.splice(index, 1);
    props.setUserMW(props.user);
    addMovieHWLReq(email, MHWlist);
  }

  const removeWL = (e, index) => {
    e.preventDefault();
    const email = props.user.email;
    const MWlist = props.user.watchlist;
    MWlist.splice(index, 1);
    props.setUserMW(props.user);
    addMovieWLReq(email, MWlist);
  }

  const renderMoviesWatched = () => {
    const render = props.user.movies_watched.map((item, index) => {
      return (
        <Row className="movieRow" key={index}>
          <Col>
              <h5 title="Search this Movie!" className="movieTitle"  onClick={(e) => clickMovieHWL(e, index)}>
                {item.title}
              </h5>
          </Col>
          <Col>
            <span
              title="Remove From Have Watched list"
              className="material-icons-outlined"
              value={index}
              onClick={(e) => removeMHW(e, index)}
            >
              clear
            </span>
          </Col>
        </Row>
      );
    });
    return render;
  };

  const renderMovieWatchList = () => {
    const render = props.user.watchlist.map((item, index) => {
      return (
        <Row className="movieRow" key={index}>
          <Col >
            <h5 title="Search this Movie!" className="movieTitle"  onClick={(e) => clickMovieWL(e, index)}>
              {item.title}
            </h5>
          </Col>
          <Col>
            <span
              title="Remove From Watchlist"
              className="material-icons-outlined"
              value={index}
              onClick={(e) => removeWL(e, index)}
            >
              clear
            </span>
            <span
              title="Add to Have Watched list"
              className="material-icons-outlined icon"
              value={index}
              onClick={(e) => removeWLAddHWL(e, index)}
            >
              drive_file_move
            </span>
          </Col>
        </Row>
      );
    });
    return render;
  };

  const getBadgeCount = () => {
    const email = props.user.email;
    axios.get(`/api/badge/badgeidcount/${email}`).then((badgeCounts) => {
      // debugger;
      setBadgeCounts(badgeCounts.data);
    });
  };

  const HWListCarousel = props.user.movies_watched.map((item, index) => {
    // let boop = props.user.movies_watched.count;
    // console.log(index);
    // if(index >= 160){
    //   console.log("yep")
    // }else {
    //   console.log("noop")
    // }

    return (
      <Carousel.Item  key={index} className="carousel-border" onClick={(e) => clickMovieHWL(e, index)}>
        <img className="d-block" width={250} src={item.poster} alt={item.title} />
      </Carousel.Item>
    );
  });

  return (
    <>
      <Row xs={1} md={2} className="m-5">
        <Col lg={5} className="profileImageCol">
          <Container className="d-flex justify-content-center">
            <Carousel indicators={false} className="profileCarousel" fade>
              {props.user.movies_watched.length > 0 
              ? (HWListCarousel )
              : (<Carousel.Item className="carousel-border">
              <img className="d-block" width={250} src="./images/reel-junkie-logo-2.jpg" alt="Brand Logo" />
            </Carousel.Item>)
              }
            </Carousel>
          </Container>
        </Col>
        <Col lg={7} className="pt-5 badgeCol">
          <Container className="pb-2 pl-5 usersName">
            <h2>{props.user.email}</h2>
            <hr/>
            <h4>Badges</h4>
          </Container>
          <Container className="badgeContainer w-75">
            <Tooltip>
              <TooltipTrigger><Image className="badgeIcon p-2" src="./badges/popcorn.png" /></TooltipTrigger>
              <TooltipContent className="tippy">"Sustenance for a dedicated movie watcher! Here's your first badge, just for being a Reel Junkie! "</TooltipContent>
            </Tooltip>
          {/* if {props.user.movies_watched.length >= #}
            
          */}
            {badgeCounts.map((value) => {
              if (value.count >= 15) {
                switch (parseInt(value._id)) {
                  case 28:
                    return (
                      <Tooltip>
                        <TooltipTrigger>                       
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/action-rambo.png"
                          />
                          </TooltipTrigger>
                        <TooltipContent className="tippy">
                          "You've got to ask yourself one question: 'Do I feel lucky I earned a badge?'
                          Well, do ya, junkie?  You earned this badge for watching 15 action movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 12:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/adventure-map.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "No Ticket! How bout a badge?
                          You earned this badge for watching 15 adventure movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 16:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/animation-mouseToy.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "It's the perfect time to be hysterical!
                          You earned this badge for watching 15 animated movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 35:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/comedy-lolCat.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "The badge has to be at least...three times bigger than
                          You earned this badge for watching 15 comedies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 80:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/crime-handcuffs.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "I'm gonna make you an offer you can't refuse...
                          this badge for watching 15 crime movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 99:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/documentary-camera.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "See the Reel Junkie in their natural habitat, notice how they graze the popcorn.
                          You earned this badge for watching 15 documentaries."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 18:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/drama-skull.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "To watch or not to watch? Was there ever really a question?  You earned this badge for watching 15 dramas."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 10751:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/family-badge.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "No awkwardness on this couch! You earned this badge for watching 15 family movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 14:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/fantasy-wizard.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "...there’s some badges in this world, Reel Junkie… and they're worth watching for.” You earned this badge for watching 15 fantasy movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 36:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/navigate-columns.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "Veni, vidi...I earned a badge. You earned this badge for watching 15 navigate movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 27:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/horror-knife.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "Brains- I mean Badges! You earned this badge for watching 15 horror movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 10402:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/musical-notes.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "Singoutcuzyouearnedabadgeandcanbebragadocious! You earned this badge for watching 15 musicals."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 9648:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/mystery-sherlock.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "With (or without) a shadow of a doubt, you earned this badge for watching 15 mysteries."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 10749:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/romance-heartMail.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "You've got a badge.
                          You earned this badge for watching 15 romance movies"
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 878:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/sci-fi-laserGun.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "In space no can hear you scream, 'I got a badge!' You earned this badge for watching 15 sci-fi movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 10770:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/tv-movie-tv.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "Why leave the couch? No, seriously? You earned this badge for watching 15 made-for-tv movies."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 53:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/thriller-rollerCoaster.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "You're gonna need a bigger badge!-holder, that is.
                          You earned this badge for watching 15 thrillers."
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 10752:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/war-helmut.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "Man, I love the smell of popcorn in the movie theater.
                          You earned this badge for watching 15 war movies"
                        </TooltipContent>
                      </Tooltip>
                    );
                  case 37:
                    return (
                      <Tooltip>
                        <TooltipTrigger>
                          <Image
                            className="badgeIcon p-2"
                            src="./badges/western-sheriffStar.png"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          "You see, in this world, there’s two kinds of people, my friend;
                          those without Screen Junkie accounts and those who save movies thay dig.
                          You dig? You earned this badge for watching 15 westerns."
                        </TooltipContent>
                      </Tooltip>
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
            <h3 className="text">Search for movies to add to your lists</h3>
            <h5 className="text">
              Movies Wached: {props.user.movies_watched.length}
            </h5>
            <h5 className="text">
              Movies on Watchlist: {props.user.watchlist.length}
            </h5>
          </Tab>
          <Tab
            className="tab"
            variant="warning"
            eventKey="Movies Watched"
            title="Movies Watched"
          >
            {props.user.movies_watched.length > 0 ? (
              renderMoviesWatched()
            ) : (
              <h5>Go watch some movies and tell us about it!</h5>
            )}
          </Tab>
          <Tab className="tab" eventKey="Watch List" title="Watch List">
            {props.user.watchlist.length > 0 ? (
              renderMovieWatchList()
            ) : (
              <h5>Go find some movies to add to your watchlist!</h5>
            )}
          </Tab>
        </Tabs>
      </Container>
    </>
  );
}

export default Profile;
