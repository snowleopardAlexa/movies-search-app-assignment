"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _movieSlice = _interopRequireDefault(require("./movies/movieSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// create the store
var store = (0, _toolkit.configureStore)({
  // reducer is an object
  reducer: {
    movies: _movieSlice["default"]
  }
}); // provide our store to our component

exports.store = store;