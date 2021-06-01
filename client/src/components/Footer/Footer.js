import React from 'react'
import "./Footer.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


function Footer(props) {
  const creditsClick = (e) => {
    e.preventDefault();
    window.scrollTo(0,0);
    props.history.push('/credits');
  }

    return (
      
  <Navbar  className= "nav-footer justify-content-between bottom">
  
         
          <Nav.Item >
      <Nav.Link className="cr-link mr-4 footerLink"  href="https://github.com/Nickpodski/reel_junkie/blob/main/LICENSE" target="_blank" rel='noopener noreferrer'>Copyright (c) 2021</Nav.Link>
      </Nav.Item>
 
 
    <Nav.Item >
      <Nav.Link className="credit-link footerLink"  href="/credits" onClick={(e) => creditsClick(e)}>Credits</Nav.Link>
      </Nav.Item>
      
     
  </Navbar>
    
    )
}

export default Footer;
