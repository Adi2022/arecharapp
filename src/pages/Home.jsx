import React from 'react'
import HomeBanner from '../components/HomeBanner';
import HomeProductsInfo from '../components/HomeProductsInfo';
import VitagolProductInfo from '../components/VitagolProductInfo';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <br/>
      <HomeProductsInfo/>
      <VitagolProductInfo/>
    </div>
  )
}

export default Home;