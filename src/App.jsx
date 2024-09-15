// Libraty Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Import
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'
import Movie from './Pages/Movie'

import './App.css'
import NavBar from './Components/NavBar';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/moviedesc/:id' element={<Movie/>}/>
      </Routes>
    </Router>
  )
}

export default App
