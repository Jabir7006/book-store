'use client';

import { Book } from '@/types/book.type';
import { createContext, useState, useEffect } from 'react';

export const Context = createContext({});

export const ContextProvider = ({ children }: { children: React.ReactNode }) => {
 const [books, setBooks] = useState<Book[]>([]);
 const [cart, setCart] = useState<Book[]>([]);
 
 // Load cart from localStorage on initial render
 useEffect(() => {
   const savedCart = localStorage.getItem('cart');
   if (savedCart) {
     setCart(JSON.parse(savedCart));
   }
 }, []);

 // Save cart to localStorage whenever it changes
 useEffect(() => {
   localStorage.setItem('cart', JSON.stringify(cart));
 }, [cart]);
 
 const addToCart = (item: Book) => {
  const existingItem = cart.find(cartItem => item.id === cartItem.id);

  if (existingItem) {
    const updatedCart = cart.map((cartItem) => 
      cartItem.id === item.id 
        ? {...cartItem, qty: cartItem.qty + 1}
        : cartItem
    );
    setCart(updatedCart);
  } else {
    setCart([...cart, {...item, qty: 1}]);
  }
 }
 
 const removeFromCart = (id: string) => {
     const updatedCart = cart.filter((item) => item.id !== id);
     setCart(updatedCart);
 }

 return (
  <Context.Provider value={{ books, cart, setBooks, setCart, addToCart, removeFromCart }}>
    {children}
  </Context.Provider>
 );
};

export default ContextProvider;