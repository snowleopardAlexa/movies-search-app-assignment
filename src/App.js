import { Routes, Route } from "react-router-dom"
import "./App.scss"
import Header from "./components/Header/Header"
import Home from "./components/Home/Home"
import MovieDetail from "./components/MovieDetail/MovieDetail"
import PageNotFound from "./components/PageNotFound"

function App() {
  return (
    <div className="app__container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:imdbID" element={<MovieDetail />} />
        <Route element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App
