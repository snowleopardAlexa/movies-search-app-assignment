import './MovieCard.scss'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {
    const { data } = props

    return (
       <Link to={`/movie/${data.imdbID}`}>
        <div className="movie__card">
          <img src={data.Poster} alt={data.Title} /> 
        </div>
        </Link>
    )
}

export default MovieCard