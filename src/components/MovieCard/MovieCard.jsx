import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    // destructure data
    const { data } = props

    return (
      // id of the movie comes from API - its unique page, each of the movie has imdbID
      // data.imdbID - thanks to destructuring data and passing prop data from MovieList to MovieCard we can fetch movie detail page based on movie id 
       <Link to={`/movie/${data.imdbID}`}>
        <div className="movie__card">
          <img src={data.Poster} alt={data.Title} /> {/* data.Title must be fetched from API */}
        </div>
        </Link>
    );
};

export default MovieCard;