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
import ProductVitagoliPre from '../ProductComponents/ProductVitagoliPre'
import GoToTopPage from '../GoToTopPage'
import Login from '../Login/Login'
import Register from '../Login/Register'
import ForgotPassword from '../Login/ForgotPassword'

const Routing = () => {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/products" element={<Products/>}/>
        <Route  path="/ingredient" element={<Ingredient/>}/>
        <Route  path="/shop" element={<Shop/>}/>
        <Route  path="/about" element={<About/>}/>
        <Route  path="/blog" element={<Blog/>}/>
        <Route  path="/impact" element={<Impact/>}/>
        <Route   path="/productVitagoli" element={<Products/>}/>
        <Route  path="/productVitagoliPre" element={<ProductVitagoliPre/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/forgot_password" element={<ForgotPassword/>}/>


      </Routes>
      <GoToTopPage/>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default Routing;
