'use client';
import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import { Context } from "@/context/ContextProvider";
import { useContext } from "react";
import { Book } from "@/types/book.type";
const CartIcon = () => {
    const { cart } = useContext(Context) as { cart: Book[] };
    return <Button variant="ghost" className="relative" asChild>
    <Link href="/cart">
      <ShoppingCart size={20} />
      <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
        {cart.length}
      </span>
    </Link>
  </Button>
    
}

export default CartIcon;