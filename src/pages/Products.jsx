import React from 'react'
import ProductVitagoli from '../ProductComponents/ProductVitagoli'
import ProductVitaFAQs from '../ProductComponents/ProductVitaFAQs'
import ProductVitaUsingPersons from '../ProductComponents/ProductVitaUsingPersons'
import ProductsRateandReview from '../ProductComponents/ProductsRateandReview'
import ProductBannerImage from '../ProductComponents/ProductBannerImage'
import ProductVitagoliTaste from '../ProductComponents/ProductVitagoliTaste'
import ProductTypes from '../ProductComponents/ProductTypes'
import ProductBenefit from '../ProductComponents/ProductBenefit'
import Product9Benefits from '../ProductComponents/Product9Benefits'
import ProductsSimilar from '../ProductComponents/ProductsSimilar'

const Products = () => {
  return (
    <div>
    <ProductVitagoli/>
    <ProductVitaFAQs/>
    <ProductVitaUsingPersons/>
    <ProductsRateandReview/>
    <ProductBannerImage/>
    <ProductVitagoliTaste/>
    <ProductTypes/>
    <ProductBenefit/>
    <Product9Benefits/>
    <ProductsSimilar/>
    </div>
  )
}

export default Products