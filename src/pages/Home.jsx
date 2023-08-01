import React from 'react'
import HomeBanner from '../components/HomeBanner';
import HomeProductsInfo from '../components/HomeProductsInfo';
import VitagolProductInfo from '../components/VitagolProductInfo';
import WecareBanner from '../components/WecareBanner';
import BookSlot from '../components/BookSlot';
import ReviewPage from '../components/ReviewPage';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <br/>
      <HomeProductsInfo/>
      <VitagolProductInfo/>
      <WecareBanner/>
      <BookSlot/>
      <ReviewPage/>
    </div>
  )
}

export default Home;