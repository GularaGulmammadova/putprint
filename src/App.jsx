/* eslint-disable no-unused-vars */
import React from 'react'
import Nav from './Components/Nav/Nav'
import Products from './Components/Products/Products'
import ProductDetail from './Components/ProductDetail/ProductDetail'
import { Route, Routes, useLocation } from 'react-router'
import About from './Components/About/About'
import Contact from './Components/ContactPage/Contact'
import Footer from './Components/Footer/Footer'
import Canvas from './Components/Canvas/Canvas'
import Designer from './Components/Designer/Designer'

const App = () => {
  const location = useLocation();

  return ( 
    <div>
        {location.pathname !== '/designTshirt' && <Nav/>}
        <Routes>
          <Route path='/products' element={<Products />} />
          <Route path='/productdetail' element={<ProductDetail/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/designTshirt' element={<Designer />}/>
        </Routes>
        {location.pathname !== '/designTshirt' && <Footer />}
    </div>
  )
}

export default App;  