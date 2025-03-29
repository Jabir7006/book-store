"use client";

import { discountedBooks } from "@/lib/data";
import { useState } from "react";

const useBooks = () => {
  const [books, setBooks] = useState(discountedBooks);
  const [searchQuery, setSearchQuery] = useState("");

  return { books, setBooks, searchQuery, setSearchQuery };
};

export default useBooks;
