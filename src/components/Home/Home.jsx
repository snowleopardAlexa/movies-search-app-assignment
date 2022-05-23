import './Home.scss'
import MoviesList from '../MoviesList/MoviesList'

const Home = () => {
    return (
        <div className="home__container">
           <MoviesList />
        </div>
    );
};

export default Home;