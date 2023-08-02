import React from 'react'
import AboutPageHeading from '../components/AboutPageHeading'
import AboutPageInfo from '../components/AboutPageInfo'
import AboutPageVideo from '../components/AboutPageVideo'
import AboutPageWhoWeAre from '../components/AboutPageWhoWeAre'
import AboutPageFounder from '../components/AboutPageFounder'

const About = () => {
  return (
    <div>
      <AboutPageHeading/>
      <AboutPageInfo/>
      <AboutPageVideo/>
      <AboutPageWhoWeAre/>
      <AboutPageFounder/>
    </div>
  )
}

export default About