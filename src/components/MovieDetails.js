import React from "react";

function MovieDetails({ movie }) {
    if(!movie) {
        return <div>Select a film please</div>
    }
    return (
        <div>
            <h2>{movie.title}</h2>
        </div>
    )
}

export default MovieDetails;