"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getSelectedMovieDetail = exports.getAllMovies = exports.removeSelectedMovieDetail = exports.fetchAsyncMovieDetail = exports.fetchAsyncMovies = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _movieApi = _interopRequireDefault(require("../../components/apis/movieApi"));

var _extraReducers;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//import { APIKey } from '../../components/apis/movieApiKey'
var fetchAsyncMovies = (0, _toolkit.createAsyncThunk)("movies/fetchAsyncMovies", function _callee(term) {
  var response;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_movieApi["default"].get("?apiKey=".concat(process.env.MOVIE_API_KEY, "&s=").concat(term, "&type=movie")));

        case 2:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
});
exports.fetchAsyncMovies = fetchAsyncMovies;
var fetchAsyncMovieDetail = (0, _toolkit.createAsyncThunk)("movies/fetchAsyncMovieDetail", function _callee2(id) {
  var response;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(_movieApi["default"].get("?apiKey=".concat(process.env.MOVIE_API_KEY, "&i=").concat(id, "&Plot=full")));

        case 2:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  });
});
exports.fetchAsyncMovieDetail = fetchAsyncMovieDetail;
var initialState = {
  movies: {},
  selectMovieDetail: {}
};
var movieSlice = (0, _toolkit.createSlice)({
  name: "movies",
  initialState: initialState,
  reducers: {
    removeSelectedMovieDetail: function removeSelectedMovieDetail(state) {
      state.selectMovieDetail = {};
    }
  },
  extraReducers: (_extraReducers = {}, _defineProperty(_extraReducers, fetchAsyncMovies.pending, function () {
    console.log("Pending");
  }), _defineProperty(_extraReducers, fetchAsyncMovies.fulfilled, function (state, _ref) {
    var payload = _ref.payload;
    console.log("Fetched Successfully!");
    return _objectSpread({}, state, {
      movies: payload
    });
  }), _defineProperty(_extraReducers, fetchAsyncMovies.rejected, function () {
    console.log("Rejected");
  }), _defineProperty(_extraReducers, fetchAsyncMovieDetail.fulfilled, function (state, _ref2) {
    var payload = _ref2.payload;
    console.log("Fetched Successfully");
    return _objectSpread({}, state, {
      selectMovieDetail: payload
    });
  }), _extraReducers)
});
var removeSelectedMovieDetail = movieSlice.actions.removeSelectedMovieDetail;
exports.removeSelectedMovieDetail = removeSelectedMovieDetail;

var getAllMovies = function getAllMovies(state) {
  return state.movies.movies;
};

exports.getAllMovies = getAllMovies;

var getSelectedMovieDetail = function getSelectedMovieDetail(state) {
  return state.movies.selectMovieDetail;
};

exports.getSelectedMovieDetail = getSelectedMovieDetail;
var _default = movieSlice.reducer;
exports["default"] = _default;