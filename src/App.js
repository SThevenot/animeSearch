/** @format */

import React, { useState } from "react";
import Home from "./components/Home";
import MovieDetails from "./components/MovieDetails";
import NavTab from "./components/NavTab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  const [movie, setMovie] = useState(null);
  return (
    <div className="App">
      <Router>
        <NavTab />
        <Routes>
          <Route path="/animesearch" element={<Home setter={setMovie}/>}></Route>
          <Route path="/details/:id" element={<MovieDetails movie={movie} />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
