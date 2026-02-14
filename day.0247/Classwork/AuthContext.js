import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState(null);
  const [products, setProducts] = useState([]);

  // რეგისტრაცია
  const register = (email, password) => {
    const newUser = { id: Date.now().toString(), email, password };
    setUsers(prev => [...prev, newUser]);
  };

  // ავტორიზაცია
  const login = (email, password) => {
    const foundUser = users.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      setUser(foundUser);
      return true;
    }
    return false;
  };

  // პროდუქტების მოთხოვნა fakeStoreAPI-დან
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        users,
        user,
        register,
        login,
        products,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
