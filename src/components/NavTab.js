/** @format */

import React from "react";
import "../styles/NavTab.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";


export default function NavTab({setter}) {
  return (
    <div>
      <Navbar id="navbar">
          <Link to="/animeSearch/"
        >          
          <Navbar.Brand id="studioTitle">Studio Ghibli Movies</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
          </Nav>
      </Navbar>
    </div>
  );
}
