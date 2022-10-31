/** @format */

import React, {useEffect, useState} from "react";

function Home({ setter }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const url = "https://ghibliapi.herokuapp.com/films/";
        fetch(url)
      .then(r => r.json())
      .then(r => setMovies(r));
  }, []);
  return (
    <>
      <h1></h1>
      <div>
        <select>
        {movies &&
          movies.map(movie => (
            <option key={movie.id} onClick={e => setter(movie)}>
              {movie.title}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}

export default Home;
