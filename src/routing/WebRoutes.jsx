import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from '../pages/Home/HomePage'
import ContactPage from '../pages/Contact/ContactPage'
import AboutPage from '../pages/About/AboutPage'


// all the web pages for routing 

export default function WebRoutes() {
  return (
      <>
          <h1>Welcome to Car-Banao</h1>

          <Routes>
              <Route path="/" element={<HomePage/>}/>
              <Route path='/home' element={<HomePage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/contact' element={<ContactPage/>}/>
          </Routes>
      </>

  )
}
