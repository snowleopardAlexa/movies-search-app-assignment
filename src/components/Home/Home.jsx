import './Home.scss'
import MoviesList from '../MoviesList/MoviesList'

const Home = () => {
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