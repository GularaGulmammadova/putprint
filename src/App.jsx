/* eslint-disable no-unused-vars */
import React, { Profiler, useEffect, useState } from 'react'
import Nav from './Components/Nav/Nav'
import Products from './Components/Products/Products'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { Route, Routes, useLocation, useParams } from 'react-router'
import About from './Components/About/About'
import Contact from './Components/ContactPage/Contact'
import Footer from './Components/Footer/Footer'
import HomePage from "./Components/HomePage/HomePage";
import Corporate from './Components/Corporate/Corporate'
import ScrollToTop from './ScrollToTop/ScrollToTop'
import ProductCheck from './Components/ProductCheck/ProductCheck'
import Designer from './Components/Designer/Designer'
 
const App = () => {

  const location = useLocation();

  return (
    <div>
      {!location.pathname.includes('/designer') && <Nav/>}
      {!location.pathname.includes('/designer') && <ScrollToTop/>}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/corporate' element={<Corporate/>}/>
        <Route path='/products' element={<Products />} />
        <Route path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/productcheck/:id' element={<ProductCheck/>}/> 
        <Route path='/designer/:id' element={<Designer />}/>
      </Routes>
      {!location.pathname.includes('/designer') && <Footer />}
    </div>
  )
}

export default App;  