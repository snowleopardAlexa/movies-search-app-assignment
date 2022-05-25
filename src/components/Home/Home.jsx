import './Home.scss'
import MoviesList from '../MoviesList/MoviesList'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchAsyncMovies } from '../../redux/movies/movieSlice';
import { BiSearchAlt } from 'react-icons/bi'

const Home = () => {
    const [term, setTerm] = useState("")
    const submitHandler = (e) => {
      e.preventDefault()
      dispatch(fetchAsyncMovies(term))
      setTerm("")
    } 
    
    const dispatch = useDispatch()
    const movieText = ""
    useEffect(() => {
      dispatch(fetchAsyncMovies(movieText))
    }, [dispatch])

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