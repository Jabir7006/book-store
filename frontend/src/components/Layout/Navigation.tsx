import Link from "next/link";
import { Container } from "../ui/Container";

const categories = [
  { name: "Books", href: "/books" },
  { name: "Electronics", href: "/electronics" },
  { name: "Stationery", href: "/stationery" },
  { name: "Gifts", href: "/gifts" },
  { name: "Toys", href: "/toys" },
  { name: "Home & Living", href: "/home-living" },
  { name: "Lifestyle", href: "/lifestyle" },
];

const Navigation = () => {
  return (
    <nav className="bg-white border-b hidden md:block">
      <Container>
        <div className="flex items-center h-10 md:h-12 overflow-x-auto">
          <ul className="flex items-center space-x-4 md:space-x-6 whitespace-nowrap">
            {categories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="text-xs md:text-sm font-medium text-gray-700 hover:text-blue-500 transition-colors"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default Navigation;
