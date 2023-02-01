import React, { Component } from 'react'

import '../index.css'
import '../App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../screen/Home'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default class Router extends Component {
  render() {
    return (
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path= '/' element={<Home/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    )
  }
}
