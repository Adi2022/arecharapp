import React from 'react'
import IngredientHeading from '../IngredientComponent/IngredientHeading';
import IngredientBanner from '../IngredientComponent/IngredientBanner';
import IngredientSourcing from '../IngredientComponent/IngredientSourcing';
import IngredientSourcingProducts from '../IngredientComponent/IngredientSourcingProducts';
import IngredientSupplement from '../IngredientComponent/IngredientSupplement';
import IngredientProductImages from '../IngredientComponent/IngredientProductImages';

const Ingredient = () => {
  return (
    <div>
      <IngredientHeading/>
      <IngredientBanner/>
      <IngredientSourcing/>
      <IngredientSourcingProducts/>
      <IngredientSupplement/>
      <IngredientProductImages/>
    </div>
  )
}

export default Ingredient;