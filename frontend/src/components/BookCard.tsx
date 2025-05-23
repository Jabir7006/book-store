import Image from "next/image";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";
import AddToCartBtn from "./AddToCartBtn";
interface BookCardProps {
  documentId: string;
  title: string;
  author: {
    name: string;
  };
  cover: {
    url: string;
  };
  regularPrice: number;
  discountPrice: number;
  discountPercentage: number;
}

export default function BookCard({
  documentId,
  title,
  author,
  cover,
  regularPrice,
  discountPrice,
}: BookCardProps) {
  const calculatedDiscountPercentage = calculateDiscountPercentage(discountPrice, regularPrice);
  return (
    <div className="group">
      <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col overflow-hidden">
        <Link
          href={`/books/${documentId }`}
          className="relative aspect-[3/4] bg-gray-100"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${cover?.url}`}
            alt={title}
            fill
            sizes="(max-width: 768px) 33vw, (max-width: 1200px) 25vw, 20vw"
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {calculatedDiscountPercentage > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
              {calculatedDiscountPercentage}% ছাড়
            </div>
          )}
        </Link>
        <div className="p-3 flex flex-col flex-grow">
          <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-xs mb-2 flex items-center gap-1">
            <BookOpen size={12} />
            <span>{author?.name}</span>
          </p>
          <div className="mt-auto pt-2">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm">৳{discountPrice}</span>
              {regularPrice > discountPrice && (
                <span className="text-gray-500 text-xs line-through">
                  ৳{regularPrice}
                </span>
              )}
            </div>
          </div>
        </div>

        <AddToCartBtn book={{id : documentId.toString(), title, description: "", author: author.name, cover: cover.url, regularPrice, discountPrice}}/>
      </div>
    </div>
  );
}
