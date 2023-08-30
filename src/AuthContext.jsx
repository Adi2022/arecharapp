import React, { createContext, useContext, useState } from 'react';
const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
 
  const login = (isLoggedIn) => {
    // Perform your login logic here
    setIsLoggedIn(isLoggedIn);

  };

  const logout = () => {
    // Perform your logout logic here
    setIsLoggedIn(null);
   

  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
