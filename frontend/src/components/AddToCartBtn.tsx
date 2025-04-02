'use client';

import { useContext } from 'react';
import { Button } from './ui/button';
import { Context } from '@/context/ContextProvider'; 
import { Book } from '@/types/book.type';
const AddToCartBtn = ({book} : {book : Book}) => {

  const {addToCart } = useContext(Context) as { addToCart: (book: Book) => void };

  return (
    <Button
    variant="outline"
    className="w-full border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white transition-all duration-300"
    onClick={() => addToCart(book)}
  >
    Add to Cart
  </Button>
  )
};

export default AddToCartBtn;