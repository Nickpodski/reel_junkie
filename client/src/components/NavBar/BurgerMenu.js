// import { slide as Menu } from 'react-burger-menu';
// // import "dist/react-burger-menu.js"; 

// import { ReactBurgerMenu } from "react-burger-menu";

// classimport  Example extends React.Component {
//   showSettings (event) {
//     event.preventDefault();
// }



//   render () {
//     // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//     return (
//       <Menu>
//         <a id="home" className="menu-item" href="/">Home</a>
//         <a id="about" className="menu-item" href="/about">About</a>
//         <a id="contact" className="menu-item" href="/contact">Contact</a>
//         {/* <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a> */}
//       </Menu>
//     );
//   }
// }
import React, { useState } from "react";
import "./BurgerMenu.css";
import { Link } from "react-router-dom";

const BurgerMenu = (props) => {
  const { logout } = props;
  const [isOpen, setOpen] = useState(false);

  const handleLogout = () => {
    setOpen(!isOpen);
    logout();
  }
  return (
    <div>
      <button
        onClick={() => setOpen(!isOpen)}
        className={`hamburger-button ${isOpen ? "open" : "close"}`}
      />
      <div className={`panel ${isOpen ? "open" : "close"}`} style={{
        backgroundImage:
          "url(/images/filmReel.jpg)"
      }}>
        <ul>
          <li className="profile">
            <Link className="burgerLink" as={Link} to="/profile" onClick={() => setOpen(!isOpen)}>Profile</Link>
          </li>
          <li className="credits">
            <Link className="burgerLink" as={Link} to="/credits" onClick={() => setOpen(!isOpen)}>Credits</Link>
          </li>
          <li className="logout">
            <Link className="burgerLink" as={Link} to="/login" onClick={handleLogout}>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;