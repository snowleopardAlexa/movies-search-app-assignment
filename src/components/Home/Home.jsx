import './Home.scss'
import MoviesList from '../MoviesList/MoviesList'
import { useEffect } from "react";
import movieApi from "../apis/movieApi";
import { APIKey } from "../apis/movieApiKey";
import { useDispatch } from "react-redux";
import { addMovies } from "../../redux/movies/movieSlice";

const Home = () => {
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
        <>
        <div className="home__container">
          <div className="search__box">
              <input
                type="text"
                placeholder="Search movie..."
              />
          </div>
        </div>
        <MoviesList />
        </>
    );
};

export default Home;