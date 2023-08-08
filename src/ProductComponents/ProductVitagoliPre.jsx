import React from 'react'
import ProductVitaFAQs from '../ProductComponents/ProductVitaFAQs'
import ProductsRateandReview from '../ProductComponents/ProductsRateandReview'
import ProductBannerImage from '../ProductComponents/ProductBannerImage'
import ProductsSimilar from '../ProductComponents/ProductsSimilar'
import VitagoliPreBanner from './VitagoliPreBanner'
import VitagoliPreWomensBenefits from './VitagoliPreWomensBenefits'
import VitagoliPreTaste from './VitagoliPreTaste'
import VitagoliPreProductsTypes from './VitagoliPreProductsTypes'
import VitagoliPre7Benefits from './VitagoliPre7Benefits'
import Vitagoli7Benefits from './Vitagoli7Benefits'
const ProductVitagoliPre = () => {
  return (
    <div>
    <VitagoliPreBanner/>
    <ProductVitaFAQs/>
    <VitagoliPreWomensBenefits/>
    <ProductsRateandReview/>
    <ProductBannerImage/>
    <VitagoliPreTaste/>
    <VitagoliPreProductsTypes/>
    <VitagoliPre7Benefits/>
    <Vitagoli7Benefits/>
    <ProductsSimilar/>
    </div>
  )
}

export default ProductVitagoliPre