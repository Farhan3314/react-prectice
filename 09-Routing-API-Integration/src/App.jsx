import React from 'react'
import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Products from './pages/Products'
import About from './pages/About'
import Contact from './pages/Contact'

import LocalStorage from './components/LocalStorage'
import FetchApiAxios from './components/API'
import LoadingErrorStates from './components/LoadingErrorStates'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
      <LocalStorage />
      <FetchApiAxios />
      <LoadingErrorStates />
    </div>
  )
}

export default App
