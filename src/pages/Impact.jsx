import React from 'react'
import ImpactHeading from '../anotherComponent/ImpactHeading';
import ImpactBanner from '../anotherComponent/ImpactBanner';
import ImpactCompanyPromises from '../anotherComponent/ImpactCompanyPromises';
import ImpactPlanetPage from '../anotherComponent/ImpactPlanetPage';
import ImpactPlanetBanner from '../anotherComponent/ImpactPlanetBanner';

const Impact = () => {
  return (
    <div>
      <ImpactHeading/>
      <ImpactBanner/>
      <ImpactCompanyPromises/>
      <ImpactPlanetPage/>
      <ImpactPlanetBanner/>
    </div>
  )
}

export default Impact;