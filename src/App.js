import { Routes, Route } from 'react-router-dom'
import './App.scss'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import PageNotFound from './components/PageNotFound'

function App() {
  return (
    <div className="App">
       <Header />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/moviedetail" exact element={<MovieDetail />} />
         <Route element={<PageNotFound />} />
       </Routes>
    </div>
  );
}

export default App;
