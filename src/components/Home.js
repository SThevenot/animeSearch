/** @format */

import React, { useEffect, useState } from "react";
import "../styles/Home.css"

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";

export default function Home({ setter }) {
  const [movies, setMovies] = useState([]);

  // ComponentDidMount is used to
  // execute the code
  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then((r) => r.json())
      .then((r) => setMovies(r));
  }, []);

  return (
    <div className="MovieDetails" id="homeDiv">
      <Row>
        {movies.map((movie) => (
          <Col xs="12" sm="6" md="4" lg="3" className="p-4" id="columnStyle">
            <Card key={movie.id} id="cardStyle">
              <Link
                to={`/details/${movie.title}`}
                onClick={(e) => setter(movie)}
              >
                <Card.Img src={movie.image} id="cardImgStyle"></Card.Img>
              </Link>
              <Card.Title id="movieTitleStyle">{movie.title}</Card.Title>
              <Card.Text id="movieDateStyle">{movie.release_date}</Card.Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
