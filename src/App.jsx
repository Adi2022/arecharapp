import React from 'react'
import Routing from './Routing/Routing';
import './App.css';
import { CartProvider } from './CartContext';
import {AuthProvider} from './AuthContext'
import { AppProvider } from './AppContext';
const App = () => {
  return (
    <div>
<AppProvider>
<AuthProvider>
      <CartProvider>
      <Routing/>
      </CartProvider>
      </AuthProvider>
</AppProvider>
     
     
    </div>
  )
}

export default App