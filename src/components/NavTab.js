/** @format */

import React from "react";
import "../styles/NavTab.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function NavTab() {
  return (
    <div>
      <Navbar id="navbar">
        <Container>
          <Navbar.Brand>Studio Ghibli Movies</Navbar.Brand>
          <Nav className="me-auto">
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
