"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllMovies = exports.addMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var initialState = {
  movies: {}
}; // create slice

var movieSlice = (0, _toolkit.createSlice)({
  name: 'movies',
  initialState: initialState,
  // actions are inside reducers
  reducers: {
    // action
    addMovies: function addMovies(state, _ref) {
      var payload = _ref.payload;
      state.movies = payload;
    }
  }
}); // export actions and reducer

var addMovies = movieSlice.actions.addMovies; // get a value from store - state, name of the movieSlice, and name of the property from initialState

exports.addMovies = addMovies;

var getAllMovies = function getAllMovies(state) {
  return state.movies.movies;
};

exports.getAllMovies = getAllMovies;
var _default = movieSlice.reducer;
exports["default"] = _default;