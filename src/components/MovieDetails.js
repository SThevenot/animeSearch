/** @format */

import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "../styles/MovieDetails.css"

export default function MovieDetails({movie}) {

  if (!movie) {
    return <div>error</div>
  }

    return (
      <div className="MovieDetails">
          <Col >
            <Card key={movie.id} id="detailsCard">
            <h1 id="detailsTitle">{movie.title}</h1>
            <h2 id="detailsOriginalTitle">{movie.original_title}</h2>
              <Card.Img src={movie.image} id="detailsImg"></Card.Img>
              <div id="movieDetailDiv"><h3 id="detailsDate">{movie.release_date}</h3>
              <h3 id="detailsDescription">{movie.description}</h3>
              <h3 id="detailsDirector">Director : {movie.director}</h3>
              <h3 id="detailsProducer">Producer : {movie.producer}</h3>
              <h3 id="detailsRtScore">Rotten Tomatoes : {movie.rt_score}%</h3></div>
              
            </Card>
          </Col>
      </div>
    );
  }