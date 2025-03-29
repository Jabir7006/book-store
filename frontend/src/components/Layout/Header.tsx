import Link from "next/link";
import { Container } from "../ui/Container";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Searchbar from "../Searchbar";
import MiniHeader from "./MiniHeader";
import MenuToggle from "../MenuToggle";
import MobileSearchWrapper from "./MobileSearchWrapper";

const Header = () => {
  return (
    <>
      <MiniHeader />
      <header className="py-3 md:py-4 border-b">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu icon */}
            <MenuToggle />

            {/* Logo */}
            <Link href="/" className="flex items-center max-md:mr-auto">
              <div className="relative h-8 md:h-10 w-28 md:w-32">
                <Image
                  src="/logo.png"
                  alt="Rokomari"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* Desktop Search Bar */}
            <div className="hidden md:block flex-1 max-w-3xl mx-4">
              <Searchbar />
            </div>

            {/* User Actions */}
            <div className="flex items-center gap-1 md:gap-3">
              {/* Mobile Search Toggle */}
              <div className="md:hidden">
                <MobileSearchWrapper />
              </div>

              <Button
                variant="ghost"
                className="hidden md:flex items-center gap-2"
                asChild
              >
                <Link href="/account">
                  <User size={20} />
                  <span className="text-sm hidden lg:inline">Sign In</span>
                </Link>
              </Button>

              <Button variant="ghost" className="relative" asChild>
                <Link href="/cart">
                  <ShoppingCart size={20} />
                  <span className="absolute -top-1 -right-1 bg-blue-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                    0
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
