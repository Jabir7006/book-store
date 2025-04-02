"use client";

import { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Context } from "@/context/ContextProvider";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  CreditCard,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { Book } from "@/types/book.type";

const Cart = () => {
  const { cart, setCart, removeFromCart } = useContext(Context) as {
    cart: Book[];
    setCart: React.Dispatch<React.SetStateAction<Book[]>>;
    removeFromCart: (id: string) => void;
  };

  // Calculate totals
  const subtotal = cart.reduce(
    (total, item) =>
      total + (item.discountPrice || item.regularPrice) * item.qty,
    0
  );
  const discount = cart.reduce((total, item) => {
    if (item.discountPrice) {
      return total + (item.regularPrice - item.discountPrice) * item.qty;
    }
    return total;
  }, 0);
  const total = subtotal;

  // Update quantity function
  const updateQuantity = (id: string, newQty: number) => {
    if (newQty < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, qty: newQty } : item
    );
    setCart(updatedCart);
  };

  return (
    <main className="py-6 md:py-10">
      <Container>
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left side - Cart items */}
          <div className="lg:w-8/12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Shopping Cart</h1>
              <span className="text-gray-600">
                {cart.length} {cart.length === 1 ? "item" : "items"}
              </span>
            </div>

            {cart.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center flex flex-col items-center justify-center min-h-[50vh]">
                <div className="flex justify-center mb-4">
                  <ShoppingBag size={64} className="text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold mb-2">
                  Your cart is empty
                </h2>
                <p className="text-gray-500 mb-6">
                  Looks like you haven't added anything to your cart yet.
                </p>
                <Button asChild>
                  <Link href="/" className="inline-flex items-center">
                    <ChevronLeft size={16} className="mr-1" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            ) : (
              <>
                <div className="bg-white rounded-lg shadow-sm mb-6 overflow-hidden ">
                  <div className="divide-y">
                    {cart.map((item) => (
                      <div
                        key={item.id}
                        className="p-4 md:p-6 flex flex-col md:flex-row"
                      >
                        {/* Item image */}
                        <div className="md:w-1/5 mb-4 md:mb-0">
                          <div className="relative h-32 w-24 md:h-40 md:w-28 mx-auto md:mx-0">
                            <Image
                              src={`${process.env.NEXT_PUBLIC_API_URL}${item.cover}`}
                              alt={item.title}
                              fill
                              sizes="(max-width: 768px) 96px, 112px"
                              className="object-contain"
                            />
                          </div>
                        </div>

                        {/* Item details */}
                        <div className="md:w-4/5 md:pl-4 flex flex-col">
                          <div className="flex justify-between mb-3">
                            <Link
                              href={`/books/${item.id}`}
                              className="text-lg font-medium text-blue-600 hover:underline line-clamp-2"
                            >
                              {item.title}
                            </Link>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              <X size={20} />
                            </button>
                          </div>

                          <p className="text-sm text-gray-600 mb-2">
                            By {item.author}
                          </p>

                          <div className="mt-auto flex flex-col sm:flex-row justify-between items-start sm:items-center">
                            <div>
                              {item.discountPrice ? (
                                <div className="flex items-center gap-2">
                                  <span className="font-semibold">
                                    ৳{item.discountPrice}
                                  </span>
                                  <span className="text-sm text-gray-500 line-through">
                                    ৳{item.regularPrice}
                                  </span>
                                </div>
                              ) : (
                                <span className="font-semibold">
                                  ৳{item.regularPrice}
                                </span>
                              )}
                            </div>

                            <div className="flex items-center mt-3 sm:mt-0">
                              <div className="flex items-center border rounded-md">
                                <button
                                  className="p-1 px-2 text-gray-600 hover:text-blue-600 cursor-pointer"
                                  onClick={() =>
                                    updateQuantity(item.id, item.qty - 1)
                                  }
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="w-8 text-center">
                                  {item.qty}
                                </span>
                                <button
                                  className="p-1 px-2 text-gray-600 hover:text-blue-600 cursor-pointer"
                                  onClick={() =>
                                    updateQuantity(item.id, item.qty + 1)
                                  }
                                >
                                  <Plus size={16} />
                                </button>
                              </div>

                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="ml-4 text-gray-500 hover:text-red-500 cursor-pointer"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <Button
                    variant="outline"
                    className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
                    asChild
                  >
                    <Link href="/" className="inline-flex items-center">
                      <ChevronLeft size={16} className="mr-1" />
                      Continue Shopping
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white cursor-pointer"
                    onClick={() => setCart([])}
                  >
                    <Trash2 size={16} className="mr-1" />
                    Clear Cart
                  </Button>
                </div>
              </>
            )}
          </div>

          {/* Right side - Order summary */}
          {cart.length > 0 && (
            <div className="lg:w-4/12">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal (
                      {cart.reduce((total, item) => total + item.qty, 0)} items)
                    </span>
                    <span>৳{subtotal.toFixed(2)}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-৳{discount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="border-t pt-3 mt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>৳{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Proceed to Checkout
                </Button>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">We Accept</h3>
                  <div className="flex flex-wrap gap-2">
                    <div className="bg-gray-100 rounded p-2 flex items-center justify-center">
                      <span className="text-sm font-medium text-pink-600">
                        bKash
                      </span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 flex items-center justify-center">
                      <span className="text-sm font-medium text-orange-600">
                        Nagad
                      </span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 flex items-center justify-center gap-1">
                      <CreditCard size={16} className="text-blue-600" />
                      <span className="text-sm font-medium text-blue-600">
                        Card
                      </span>
                    </div>
                    <div className="bg-gray-100 rounded p-2 flex items-center justify-center gap-1">
                      <Truck size={16} className="text-green-600" />
                      <span className="text-sm font-medium">
                        Cash on Delivery
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
};

export default Cart;
