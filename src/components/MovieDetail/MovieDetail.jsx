import { useEffect } from "react";
import "./MovieDetail.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovieDetail,
  getSelectedMovieDetail,
} from "../../redux/movies/movieSlice";

const MovieDetail = () => {
  // get the ID to pass to async action creator
  // we get the ID with the use of useParams hook
  const { imdbID } = useParams();
  // dispatch async action creator --> how? --> use useEffect
  const dispatch = useDispatch();
  // get details from the store with the use of useSelector
  const data = useSelector(getSelectedMovieDetail);
  // log complete detail data in console
  console.log(data);
  useEffect(() => {
    // dispatch async action creator
    // pass id into function call ()
    dispatch(fetchAsyncMovieDetail(imdbID));
    // add dispatch and imdbID to dependency - WARNING
  }, [dispatch, imdbID]);

  return (
    <div className="movie__section">
      <div className="section__left">
        <Link to="/">
          <img src="/icons/icon-arrow-grey.svg" alt="arrow-come-back" />
        </Link>
        <h5>
          {data.Runtime} • {data.Year} •<span className="letter">R</span>
        </h5>
        <div className="movie__title">{data.Title}</div>
        {/* RATING */}
        <div className="movie__rating">
          {/* RATING IMDB */}
          <ul className="rating__list">
            <li>
            {/* IMDB RATING */}
              <div className="rating__imdb">
                <div className="rating__container">
                  <span className="color">
                    <img src="/logos/logo-imdb.svg" alt="imdb" />
                  </span>
                  <span className="blank">
                    <p>{data.imdbRating} / 10</p>
                  </span>
                </div>
              </div>
            </li>
            <li>
              {/* RATING ROTEN TOMATOES */}
              <div className="rating__rotten__tomatoes">
                <div className="rating__container">
                  <span className="color">
                    <img src="/logos/logo-rotten-tomatoes.svg" alt="imdb" />
                  </span>
                  <span className="blank">
                    <p>{data.imdbRating} %</p>
                  </span>
                </div>
              </div>
            </li>
            <li>
              {/* ADD TO FAVORITES */}
              <div className="rating__favorites">
              <div className="rating__container">
                  <span className="color">
                   <img src="/icons/icon-heart-white.svg" alt="imdb" />            
                  </span>
                  <span className="blank">
                    <p>Add to Favorites</p>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="movie__info">
          <span className="movie__plot">
            <h4>Plot</h4>
            <p>{data.Plot}</p>
          </span>
          <div className="movie__info__details">
            <span className="category">
              <h4>Cast</h4>
              <p>{data.Actors}</p>
            </span>
            <span className="category">
              <h4>Genre</h4>
              <p>{data.Genre}</p>
            </span>
            <span className="category">
              <h4>Director</h4>
              <p>{data.Director}</p>
            </span>
          </div>
        </div>
      </div>
      <div className="section__right">
        <img src={data.Poster} alt={data.Title} />
      </div>
    </div>
  );
};

export default MovieDetail;
