import React from 'react'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/SignUp.jsx'
import Todoapp from './component/Todoapp.jsx'


import Getstart from './pages/Getstart.jsx'
import{ BrowserRouter as Router, Route, Routes } from 'react-router-dom';




const App = () => {
  return (
    <div>
     
      <Routes>
        <Route path="/" element={<Getstart />} />
        <Route path="/Home" element={<Home />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup/>} />
        <Route path="/Todoapp" element={<Todoapp />} />
        
      </Routes>
      
    </div>
  )
}

export default App
