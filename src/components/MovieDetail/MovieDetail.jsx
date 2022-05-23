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
        <div>
      
       
        </div>
    );
};

export default MovieDetail;