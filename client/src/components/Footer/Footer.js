import React from 'react'
import "./Footer.css"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"


function Footer() {
    return (
       <>
  <Navbar className= "nav-footer justify-content-between bottom">
  
         
          <Nav.Item >
      <Nav.Link className="cr-link mr-4 footerLink"  href="https://github.com/Nickpodski/reel_junkie/blob/main/LICENSE">Copyright (c) 2021 Nick Podniestrzanski</Nav.Link>
      </Nav.Item>
 
 
    <Nav.Item >
      <Nav.Link className="credit-link footerLink"  href="/credits">Credits</Nav.Link>
      </Nav.Item>
      
     
  </Navbar>
     </>
    )
}

export default Footer;
