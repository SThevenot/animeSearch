/** @format */

import React, { useEffect, useState } from "react";

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
    fetch("https://ghibliapi.herokuapp.com/films/")
      .then((r) => r.json())
      .then((r) => setMovies(r));
  }, []);

  return (
    <div className="MovieDetails">
      <Row>
        {movies.map((movie) => (
          <Card key={movie.id}>
            <Link to={`/details/${movie.id}`} onClick={e => setter(movie)}>
              <Card.Img src={movie.image}></Card.Img>
            </Link>
            <h2>{movie.title}</h2>
            <h3>{movie.release_date}</h3>
          </Card>
        ))}
      </Row>
    </div>
  );
}
