import React from 'react'

import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Ingredient from '../pages/Ingredient'
import Shop from '../pages/Shop'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Impact from '../pages/Impact'
import Header from '../Layout/Header'
import Footer from '../Layout/Footer'
import ProductVitagoli from '../ProductComponents/ProductVitagoli'
import ProductVitagoliPre from '../ProductComponents/ProductVitagoliPre'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/products" element={<Products/>}/>
        <Route exact path="/ingredient" element={<Ingredient/>}/>
        <Route exact path="/shop" element={<Shop/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/impact" element={<Impact/>}/>
        <Route exact  path="/productVitagoli" element={<Products/>}/>
        <Route  path="/productVitagoliPre" element={<ProductVitagoliPre/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
