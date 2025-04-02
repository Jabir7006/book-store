import Link from "next/link";
import { Container } from "../ui/Container";
import { User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import Searchbar from "../Searchbar";
import MiniHeader from "./MiniHeader";
import MenuToggle from "../MenuToggle";
import MobileSearchWrapper from "./MobileSearchWrapper";
import CartIcon from "./CartIcon";
import HeaderScrollShadow from "./HeaderScrollShadow";

const Header = () => {
  return (
    <>
      <MiniHeader />
      <header className="py-3 md:py-4 border-b bg-white sticky top-0 z-50">
        <HeaderScrollShadow />
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
                  sizes="(max-width: 768px) 112px, 128px"
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

              <CartIcon />
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
