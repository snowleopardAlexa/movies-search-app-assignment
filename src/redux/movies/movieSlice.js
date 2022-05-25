import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import movieApi from '../../components/apis/movieApi'
import { APIKey } from '../../components/apis/movieApiKey'

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await movieApi.get(
      `?apiKey=${APIKey}&s=${term}&type=movie`
    );
    return response.data
  }
);

export const fetchAsyncMovieDetail = createAsyncThunk(
  "movies/fetchAsyncMovieDetail",
  async (id) => {
    const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
    return response.data
  }
);

const initialState = {
  movies: {},
  selectMovieDetail: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieDetail: (state) => {
      state.selectMovieDetail = {}
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully!")
      return { ...state, movies: payload }
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched Successfully");
      return { ...state, selectMovieDetail: payload }
    },
  },
})

export const { removeSelectedMovieDetail } = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getSelectedMovieDetail = (state) => state.movies.selectMovieDetail
export default movieSlice.reducer
