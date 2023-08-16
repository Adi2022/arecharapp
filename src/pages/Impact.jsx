import React from 'react'
import ImpactHeading from '../anotherComponent/ImpactHeading';
import ImpactBanner from '../anotherComponent/ImpactBanner';
import ImpactCompanyPromises from '../anotherComponent/ImpactCompanyPromises';
import ImpactPlanetPage from '../anotherComponent/ImpactPlanetPage';
import ImpactPlanetBanner from '../anotherComponent/ImpactPlanetBanner';
import ImpactPeoplePage from '../anotherComponent/ImpactPeoplePage';
import ImpactPeopleBanner from '../anotherComponent/ImpactPeopleBanner';

const Impact = () => {
  return (
    <div>
      <ImpactHeading/>
      {/* <ImpactBanner/> */}
      <ImpactCompanyPromises/>
      <ImpactPlanetPage/>
      <ImpactPlanetBanner/>
      <ImpactPeoplePage/>
      <ImpactPeopleBanner/>
    </div>
  )
}

export default Impact;