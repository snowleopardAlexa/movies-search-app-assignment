import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    // destructure data
    const { data } = props

    return (
      // id of the movie comes from API - its unique page, each of the movie has imdbID
       <Link to={`/movie/imdbID`}>
        <div className="movie__card">
          <img src={data.Poster} alt={data.Title} /> {/* data.Title must be fetched from API */}
        </div>
        </Link>
    );
};

export default MovieCard;