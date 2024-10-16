/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Components/Nav/Nav'
import Products from './Components/Products/Products'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import About from './Components/About/About'
import { Route, Routes } from 'react-router'


const App = () => {
  return (
    <div>
        <Nav/>
        <Routes>
          <Route path='/products' element={<Products/>} />
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/about' element={<About/>} />
        </Routes>
    </div>
  )
}

export default App