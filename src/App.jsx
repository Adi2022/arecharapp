import React from 'react'
import Routing from './Routing/Routing';
import './App.css';
import { CartProvider } from './CartContext';
import {AuthProvider} from './AuthContext'
const App = () => {
  return (
    <div>
      <AuthProvider>
      <CartProvider>
      <Routing/>
      </CartProvider>
      </AuthProvider>
     
    </div>
  )
}

export default App