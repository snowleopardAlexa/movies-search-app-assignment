import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from "../apis/movieApi";
import { APIKey } from "../apis/movieApiKey";

// create async action creator in order to add extra reducers
// createAsyncThunk takes two arguments - 1. string for async creator identifier, 2. payload creator callback function, 3. there is a third parameters to create async thunk wich is an object but we don't need it for this project
const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', 
async() => {
    const movieText = "Cat";
    const response = await movieApi
    .get(`?apiKey=${APIKey}&s=${movieText}&type=movie`
    )
    // return async action creator
    return response.data
})

// setup intial state that equals to movies 
// movies is property
const initialState = {
    movies: {}
}

// create slice
const movieSlice = createSlice ({
    name: 'movies',
    initialState,
    // actions are inside reducers
    reducers: {
        // action
        addMovies: (state, {payload}) => {
            state.movies = payload;
        }
    },
})

// export actions and reducer
export const { addMovies } = movieSlice.actions
// get a value from store - state, name of the movieSlice, and name of the property from initialState
export const getAllMovies = (state) => state.movies.movies
export default movieSlice.reducer