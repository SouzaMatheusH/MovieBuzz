// Libraty Imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages Import
import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home'

import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Register' element={<Register/>}></Route>
        <Route path='/Home' element={<Home/>}/>
      </Routes>
    </Router>
  )
}

export default App
