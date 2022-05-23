import React from 'react';

const MovieCard = (props) => {
    // destructure data
    const { data } = props

    return (
        <div className="movie__card">
          <img src={data.Poster} alt={data.Title} /> {/* data.Title must be fetched from API */}
        </div>
    );
};

export default MovieCard;