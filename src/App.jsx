/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Components/Nav/Nav'
import Products from './Components/Products/Products'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { Route, Routes } from 'react-router'
import About from './Components/About/About'
import Contact from './Components/ContactPage/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path='/products' element={<Products/>} />
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
    </div>
  )
}

export default App;  