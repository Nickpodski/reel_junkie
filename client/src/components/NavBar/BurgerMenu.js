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
        <li className="home">
            <Link className="burgerLink" as={Link} to="/" onClick={() => setOpen(!isOpen)}>Home</Link>
          </li>
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