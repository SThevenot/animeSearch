import React, {useState} from "react";
import Home from "./components/Home"
import movieDetails from "./components/MovieDetails"

function App() {
    const [movie, setMovie] = useState(null);

    return (
        <>
        <h1>Ghibli</h1>
        <Home setter={setMovie}/>
        </>
    )
}

export default App;