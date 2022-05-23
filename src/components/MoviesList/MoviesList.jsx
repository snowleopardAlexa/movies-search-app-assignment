import { useEffect } from "react";
import "./MoviesList.scss";
import movieApi from "../apis/movieApi";
import { APIKey } from "../apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/movies/movieSlice";

const MoviesList = () => {
  const movieText = "Cat";
  // whenever I get values from api, I want to dispatch an action
  // after dispatch - data is sent to reducer - this caused the state to update!
  // react hook useDispatch can't be called inside callback function
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Error :", err);
        });
      // dispatch action addMovies - pass response.data - data is the key which contains all the resuslts
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, []);
  return (
    <div className="container">
      <div className="background__image"></div>
      <h3>Don't know what to search?</h3>
      <p>Here's an offer that you can't refuse</p>
    </div>
  );
};

export default MoviesList;
