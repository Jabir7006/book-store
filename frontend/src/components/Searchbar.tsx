"use client";

import { Search } from "lucide-react";
import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

const Searchbar = () => {
  const router = useRouter();

  return (
    <form className="w-full">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for books, electronics..."
          className="w-full px-4 py-2 border rounded-full pr-10 focus:outline-none focus:ring-1 focus:ring-primary border-blue-500 text-sm"
          aria-label="Search"
        />
        <button
          type="submit"
          className="absolute right-0 top-0 h-full aspect-square flex items-center justify-center text-blue-500"
          aria-label="Submit search"
        >
          <Search size={20} />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
