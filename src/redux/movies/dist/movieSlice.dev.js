"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getAllMovies = exports.addMovies = exports.fetchAsyncMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _movieApi = _interopRequireDefault(require("../../components/apis/movieApi"));

var _movieApiKey = require("../../components/apis/movieApiKey");

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// create async action creator in order to add extra reducers
// createAsyncThunk takes two arguments - 1. string for async creator identifier, 2. payload creator callback function, 3. there is a third parameters to create async thunk wich is an object but we don't need it for this project
// we add export to because we can't import fetchAsyncMovies from Home
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

exports.fetchAsyncMovies = fetchAsyncMovies;
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
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchAsyncMovies.pending, function () {
    console.log("Pending");
  }), _defineProperty(_extraReducers, fetchAsyncMovies.fulfilled, function (state, _ref2) {
    var payload = _ref2.payload;
    console.log("Fetched Successfully!"); // we take whatever initial state is (movies)
    // we assign payload to movies
    // .. spread operator

    return _objectSpread({}, state, {
      movies: payload
    });
  }), _defineProperty(_extraReducers, fetchAsyncMovies.rejected, function () {
    console.log("Rejected");
  }), _extraReducers)
}); // export actions and reducer

var addMovies = movieSlice.actions.addMovies; // get a value from store - state, name of the movieSlice, and name of the property from initialState

exports.addMovies = addMovies;

var getAllMovies = function getAllMovies(state) {
  return state.movies.movies;
};

exports.getAllMovies = getAllMovies;
var _default = movieSlice.reducer;
exports["default"] = _default;