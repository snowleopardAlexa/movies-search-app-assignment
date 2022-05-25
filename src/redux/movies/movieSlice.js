import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from "../../components/apis/movieApi";
import { APIKey } from "../../components/apis/movieApiKey";

// create async action creator in order to add extra reducers
// createAsyncThunk takes two arguments - 1. string for async creator identifier, 2. payload creator callback function, 3. there is a third parameters to create async thunk wich is an object but we don't need it for this project
// we add export to because we can't import fetchAsyncMovies from Home
export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
async(term) => {
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${term}&type=movie`
    )
    // return async action creator
    return response.data
})

// fetch detail page
export const fetchAsyncMovieDetail = createAsyncThunk (
    "movies/fetchAsyncMovieDetail", 
    async(id) => {
        const response = await movieApi.get(
            // parameter i - id, parameter Plot - full - from omdb parameters website
            // use & = and 
            `?apiKey=${APIKey}&i=${id}&Plot=full`
        )
        return response.data
      }
    )

// setup intial state that equals to movies 
// movies is property
const initialState = {
    movies: {},
    selectMovieDetail: {}
}

// create slice
const movieSlice = createSlice ({
    name: 'movies',
    initialState,
    // actions are inside reducers
    reducers: {
        // remove previous title of the movie
        removeSelectedMovieDetail: (state) => {
            // empty object
            state.selectMovieDetail = {}
        }
    },
    extraReducers: {
      // object
      [fetchAsyncMovies.pending] : () => {
          console.log("Pending")
      },
      //
      [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
          console.log("Fetched Successfully!")
          // we take whatever initial state is (movies)
          // we assign payload to movies
          // .. spread operator
          return {...state, movies: payload }
      },
      [fetchAsyncMovies.rejected]: () => {
          console.log("Rejected")
      },
      // movie detail page
      [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
          console.log("Fetched Successfully")
          return { ...state, selectMovieDetail: payload}
      }
    }
})

// export actions and reducer
export const { removeSelectedMovieDetail } = movieSlice.actions
// get a value from store - state, name of the movieSlice, and name of the property from initialState
export const getAllMovies = (state) => state.movies.movies
// export selected movie detail
export const getSelectedMovieDetail = (state) => state.movies.selectMovieDetail
export default movieSlice.reducer