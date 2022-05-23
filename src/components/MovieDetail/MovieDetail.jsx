import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAsyncMovieDetail, getSelectedMovieDetail } from '../../redux/movies/movieSlice';

const MovieDetail = () => {
    // get the ID to pass to async action creator
    // we get the ID with the use of useParams hook
    const { imdbID } = useParams()
    // dispatch async action creator --> how? --> use useEffect
    const dispatch = useDispatch()
    // get details from the store with the use of useSelector 
    const data = useSelector(getSelectedMovieDetail)
    // log complete detail data in console
    console.log(data)
    useEffect(() => {
      // dispatch async action creator
      // pass id into function call ()
      dispatch(fetchAsyncMovieDetail(imdbID))
      // add dispatch and imdbID to dependency - WARNING
    }, [dispatch, imdbID])

    return (
        <div className="movie__section">
         <div className="section__left">
             <div className="movie__title">{data.Title}</div>
             <div className="movie__rating">
                 <span>
                     IMDB Rating icon imdb {data.raiting}
                 </span>
                 <span>
                     IMDB Rating rotten tomatoes {data.raiting} 
                 </span>
                 <span>
                     IMDB Rating heart icon Add to favourites {data.raiting}
                 </span>
             </div>
             <div className="movie__info">
                 <span>
                     <h4>Plot</h4>
                     {data.Plot}
                 </span>
                 <div className="movie__info__details">
                     <span>
                         <h4>Cast</h4>
                         {data.Actors}
                     </span>
                     <span>
                         {data.Genre}
                     </span>
                     <span>
                         {data.Director}
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