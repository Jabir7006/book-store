"use client";

import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const categories = [
  { name: "Books", href: "/books" },
  { name: "Electronics", href: "/electronics" },
  { name: "Stationery", href: "/stationery" },
  { name: "Gifts", href: "/gifts" },
  { name: "Toys", href: "/toys" },
  { name: "Home & Living", href: "/home-living" },
  { name: "Lifestyle", href: "/lifestyle" },
];

const MenuToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when path changes (navigation occurs)
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Close menu when ESC key is pressed
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      <Button
        variant="ghost"
        className="md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="absolute top-0 left-0 h-screen w-4/5 max-w-xs bg-white shadow-lg z-50 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            id="mobile-menu"
          >
            <div className="p-4 flex flex-col">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </Button>
              </div>

              <div className="py-2">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 border rounded-full text-sm focus:outline-none focus:ring-1 focus:ring-primary border-gray-300"
                />
              </div>

              <nav className="mt-4">
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <Link
                        href={category.href}
                        className="block px-2 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-500 rounded-md transition-colors"
                      >
                        {category.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MenuToggle;
