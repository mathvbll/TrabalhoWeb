import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import "./App.css"

import Register from './pages/Register'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
        <Outlet/>
    </div>
  );
}

export default App
