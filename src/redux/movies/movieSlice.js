import { createSlice } from '@reduxjs/toolkit'

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