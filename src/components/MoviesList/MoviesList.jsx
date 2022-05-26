import { useSelector } from "react-redux"
import { getAllMovies } from "../../redux/movies/movieSlice"
import MovieCard from "../MovieCard/MovieCard"
import "./MoviesList.scss"

const MoviesList = () => {
  const movies = useSelector(getAllMovies)
  let showMovies = ""

  showMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => (
        <MovieCard key={index} data={movie} />
      ))
    ) : (
      <div className="movies__error">
        <h6>{movies.Error}</h6>
      </div>
    );
  return (
    <div className="container">
      <div className="movie__list">
        <div className="movie__container">{showMovies}</div>
      </div>
      <div className="background__image"></div>
      <div className="image__text">
        <h3>Don't know what to search?</h3>
        <p>Here's an offer that you can't refuse</p>
      </div>
     </div>
  )
}

export default MoviesList
