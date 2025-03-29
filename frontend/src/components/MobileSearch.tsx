"use client";

import { Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Searchbar from "./Searchbar";

const MobileSearch = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close search when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    if (isOpen) {
      window.addEventListener("keydown", handleEsc);
    }

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => setIsOpen(true)}
        className="md:hidden"
        aria-label="Open search"
      >
        <Search size={20} />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 bg-white z-50 p-4">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Search</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                aria-label="Close search"
              >
                <X size={20} />
              </Button>
            </div>
            <Searchbar />
          </div>
        </div>
      )}
    </>
  );
};

export default MobileSearch;
