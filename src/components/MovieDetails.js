/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function MovieDetails({movie}) {

  if (!movie) {
    return <div>error</div>
  }

    return (
      <div className="MovieDetails">
        <h2>bees</h2>
          <Col sm="12" md="6" lg="4" xl="3" className="p-3">
            <Card key={movie.id}>
              <Card.Img src={movie.image}></Card.Img>
              <h2>{movie.title}</h2>
              <h3>{movie.release_date}</h3>
            </Card>
          </Col>
      </div>
    );
  }