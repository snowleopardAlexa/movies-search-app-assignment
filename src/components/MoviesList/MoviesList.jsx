import { useSelector } from "react-redux";
import { getAllMovies } from "../../redux/movies/movieSlice";
import MovieCard from "../MovieCard/MovieCard";
import "./MoviesList.scss";


const MoviesList = () => {

  const movies = useSelector(getAllMovies)  
  // show movies on the screen
  let showMovies = ''

  showMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
    // data - prop that we pass to MovieCard.jsx component
      <MovieCard key={index} data={movie} />
   ))
  ) : (
  <div className="movies__error">
      <h3>{movies.Error}</h3>
  </div>
  )
  return (
    <div className="container">
        <div className="movie__list">
            <div className="movie__container">{showMovies}</div>
        </div>
      <div className="background__image"></div>
      <h3>Don't know what to search?</h3>
      <p>Here's an offer that you can't refuse</p>
    </div>
  );
};

export default MoviesList;
