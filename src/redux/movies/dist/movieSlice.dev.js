"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllMovies = exports.addMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _movieApi = _interopRequireDefault(require("../apis/movieApi"));

var _movieApiKey = require("../apis/movieApiKey");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// create async action creator in order to add extra reducers
// createAsyncThunk takes two arguments - 1. string for async creator identifier, 2. payload creator callback function, 3. there is a third parameters to create async thunk wich is an object but we don't need it for this project
var fetchAsyncMovies = (0, _toolkit.createAsyncThunk)('movies/fetchAsyncMovies', function _callee() {
  var movieText, response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          movieText = "Cat";
          _context.next = 3;
          return regeneratorRuntime.awrap(_movieApi["default"].get("?apiKey=".concat(_movieApiKey.APIKey, "&s=").concat(movieText, "&type=movie")));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 5:
        case "end":
          return _context.stop();
      }
    }
  });
}); // setup intial state that equals to movies 
// movies is property

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