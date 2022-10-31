/** @format */

import React, { useState } from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [movie, setMovie] = useState(null);

  return (
    <div className="App">
      <Router>
        <Nav />
        {/* <Home setter={setMovie} /> */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/details/:id"
            element={<MovieDetails movie={movie} />}
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
