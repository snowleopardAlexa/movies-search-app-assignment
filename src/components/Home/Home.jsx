import './Home.scss'
import MoviesList from '../MoviesList/MoviesList'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// we can fetch async movies because we export it in movieSlice by adding export to const fetchAsyncMovies
import { fetchAsyncMovies } from "../../redux/movies/movieSlice";
import { BiSearchAlt } from 'react-icons/bi'

const Home = () => {
    const [term, setTerm] = useState("")
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(fetchAsyncMovies(term))
    } 
    // whenever I get values from api, I want to dispatch an action
    // after dispatch - data is sent to reducer - this caused the state to update!
    // react hook useDispatch can't be called inside callback function
    const dispatch = useDispatch()
    const movieText = ""
    useEffect(() => {
      dispatch(fetchAsyncMovies(movieText))
    }, [dispatch]);

    return (
        <>
          <div className="home__container">
          <div className="search__box">
            <form onSubmit={submitHandler}>
            <BiSearchAlt className="icon" size="32" />
              <input
                type="text"
                placeholder="Search movie..."
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              />
              </form>
          </div>
        </div>
        <MoviesList />
        </>
    );
};

export default Home;