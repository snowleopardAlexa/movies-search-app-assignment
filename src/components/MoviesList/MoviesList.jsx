import { useEffect } from 'react'
import './MoviesList.scss'
import movieApi from "../apis/movieApi"
import { APIKey } from '../apis/movieApiKey'

const MoviesList = () => {
useEffect(() => {
    const movieText = 'Cat'
    const fetchMovies = async() => {
        const response = await movieApi
           .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
           .catch((err) => {
             console.log("Error :", err)
        })
        console.log("API RESPONSE ", response)
    }
    fetchMovies()
}, [])
    return (
        <div className="container">
          <div className="background__image"></div>
           <h3>Don't know what to search?</h3>
           <p>Here's an offer that you can't refuse</p>
        </div>
    );
};

export default MoviesList;