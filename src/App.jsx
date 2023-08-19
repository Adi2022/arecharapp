import React from 'react'
import Routing from './Routing/Routing';
import './App.css';
import { CartProvider } from './CartContext';
const App = () => {
  return (
    <div>
      <CartProvider>
      <Routing/>
      </CartProvider>
     
    </div>
  )
}

export default App