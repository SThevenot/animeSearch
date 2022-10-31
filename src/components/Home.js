/** @format */

import React, { useEffect, useState } from "react";

// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom"

function Home({ setter }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const url = "https://ghibliapi.herokuapp.com/films/";
    fetch(url)
      .then((r) => r.json())
      .then((r) => setMovies(r));
  }, []);
  return (
    <>
      <h1>Hi</h1>
      <div>
        <Row>
          {movies &&
            movies.map((movie) => (
              <Col sm="12" md="6" lg="4" xl="3" className="p-3">
                <Card key={movie.id} onClick={(e) => setter(movie)}>
                  <Link to={`/details/${movie.id}`}>
                  <Card.Img src={movie.image}></Card.Img>
                  </Link>
                  <h2>{movie.title}</h2>
                  <h3>{movie.release_date}</h3>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </>
  );
}

export default Home;
