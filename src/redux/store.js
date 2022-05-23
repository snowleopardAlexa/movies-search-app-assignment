import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from "./movies/movieSlice"

// create the store
export const store = configureStore({
    // reducer is an object
    reducer: moviesReducer,

})

// provide our store to our component