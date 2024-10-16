/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Components/Nav/Nav'
import Products from './Components/Products/Products'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import ContactPage from "./Components/ContactPage/Contact";
import { Route, Routes } from 'react-router'
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/ContactPage' element={<ContactPage/>} />
        <Route path='/products' element={<Products />} />
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;  