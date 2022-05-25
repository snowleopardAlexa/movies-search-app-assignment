import { useEffect, useState } from 'react'
import './MovieDetail.scss'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchAsyncMovieDetail,
  getSelectedMovieDetail,
  removeSelectedMovieDetail,
} from '../../redux/movies/movieSlice'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const MovieDetail = () => {
  const [like, setLike] = useState(true)
  const [count, setCount] = useState(0)
  
  const { imdbID } = useParams()
  const dispatch = useDispatch()
  const data = useSelector(getSelectedMovieDetail)
  console.log(data)
  useEffect(() => {
    dispatch(fetchAsyncMovieDetail(imdbID))
    dispatch(fetchAsyncMovieDetail(imdbID))
    return() => {
        dispatch(removeSelectedMovieDetail())
    }
  }, [dispatch, imdbID])

  return (
    <div className="movie__section">
        {Object.keys(data).length === 0 ? (
            <div>...Loading</div>
        ) : (
      <>
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
              <div onClick={() => setLike((prevLike) => !prevLike)}>
              {like ? (
                  <div className="rating__container__grey"  onClick={() => setCount(count + 1)}>
                    <span className="grey">
                     <AiOutlineHeart size="0.8em" />         
                    </span>
                    <span className="text">
                      <p>Add to Favorites</p>
                    </span>
                  </div>
              ) : (
                <div className="rating__container__color" onClick={() => setCount(count - 1)}>
                <span className="color">
                 <AiFillHeart size="0.8em" color="#fff" />         
                </span>
                <span className="text">
                  <p>Added</p>
                </span>
              </div>
              )}
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
      </>
       )}
    </div>
  )
}

export default MovieDetail


