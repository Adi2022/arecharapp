import React from 'react'
import HomeBanner from '../components/HomeBanner';
import HomeProductsInfo from '../components/HomeProductsInfo';
import VitagolProductInfo from '../components/VitagolProductInfo';
import WecareBanner from '../components/WecareBanner';
import BookSlot from '../components/BookSlot';
import ReviewPage from '../components/ReviewPage';
import BlogsPage from '../components/BlogsPage';
import FaqsPage from '../components/FaqsPage';
import YoutubeVideo from '../components/YoutubeVideo';
import FeaturedProducts from '../components/FeaturedProducts';
import LearnMore from '../components/LearnMore';

const Home = () => {
  return (
    <div>
      <HomeBanner/>
      <br/>
      <HomeProductsInfo/>
      {/* <VitagolProductInfo/> */}
      <WecareBanner/>
      <BookSlot/>
      <ReviewPage/>
      <BlogsPage/>
      <FaqsPage/>
      <YoutubeVideo/>
      {/* <FeaturedProducts/> */}
      <LearnMore/>
    </div>
  )
}

export default Home;