import apiClient from "@/lib/api-client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart, Share2, Star, ChevronRight, BookOpen, Globe, Building, Calendar, PenSquare } from "lucide-react";
import Link from "next/link";
import { calculateDiscountPercentage } from "@/utils/calculateDiscountPercentage";

// Define types for the API response
interface BookResponse {
  data: {
    id: number;
    documentId: string;
    title: string;
    description?: string;
    language: string;
    publisher?: string;
    regularPrice: number;
    discountPrice?: number;
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
    cover: {
      id: number;
      documentId: string;
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        small: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
        medium: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          sizeInBytes: number;
          url: string;
        };
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: null;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
    author: {
      id: number;
      documentId: string;
      name: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
    category: {
      id: number;
      documentId: string;
      title: string;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
  meta: Record<string, unknown>;
}

const BookPage = async ({ params }: { params: { id: string } }) => {
  const response = await apiClient.get<BookResponse>(`books/${params.id}`);
  const { data: book } = response;
  
  // Calculate discount percentage
  const discountPercentage = calculateDiscountPercentage(book.discountPrice ?? 0, book.regularPrice);
  
  return ( 
    <div className="py-6">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-blue-600">Home</Link>
        <ChevronRight size={16} className="mx-2" />
        {book.category && (
          <>
            <Link href={`/categories/${book.category.id}`} className="hover:text-blue-600">
              {book.category.title}
            </Link>
            <ChevronRight size={16} className="mx-2" />
          </>
        )}
        <span className="text-gray-700 truncate">{book.title}</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Book Image Column */}
        <div className="md:col-span-4">
          <div className="sticky top-24 flex flex-col gap-4">
            <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
              <div className="relative aspect-[3/4] bg-gray-50">
                {book.cover && (
                  <Image
                    src={`${process.env.NEXT_PUBLIC_API_URL}${book.cover.url}`}
                    alt={book.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
                {discountPercentage > 0 && (
                  <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-bl-lg">
                    {discountPercentage}% ছাড়
                  </div>
                )}
              </div>
            </div>
            
            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Heart size={18} />
                <span>Wishlist</span>
              </Button>
              <Button variant="outline" size="sm" className="flex-1 gap-2">
                <Share2 size={18} />
                <span>Share</span>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Book Details Column */}
        <div className="md:col-span-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h1>
          
          {/* Author info */}
          {book.author && (
            <div className="mb-4">
              <Link 
                href={`/authors/${book.author.id}`} 
                className="flex items-center gap-1.5 text-gray-600 hover:text-blue-600 transition-colors"
              >
                <PenSquare size={16} />
                <span className="font-medium">{book.author.name}</span>
              </Link>
            </div>
          )}
          
          {/* Ratings */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  className={`${star <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  size={16} 
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">(12 Reviews)</span>
          </div>
          
          {/* Price section */}
          <div className="bg-gray-50 p-4 rounded-lg mb-6">
            <div className="flex items-end gap-3 mb-2">
              {book.discountPrice ? (
                <>
                  <span className="text-2xl font-bold text-blue-600">৳{book.discountPrice}</span>
                  <span className="text-lg text-gray-500 line-through">৳{book.regularPrice}</span>
                  <span className="text-sm text-green-600 font-medium">Save ৳{book.regularPrice - book.discountPrice} ({discountPercentage}%)</span>
                </>
              ) : (
                <span className="text-2xl font-bold text-blue-600">৳{book.regularPrice}</span>
              )}
            </div>
            
            <div className="text-sm text-gray-500 mb-4">Inclusive of all taxes</div>
            
            <div className="flex gap-3">
              <Button className="px-8 bg-blue-600 hover:bg-blue-700 gap-2">
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </Button>
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white">
                Buy Now
              </Button>
            </div>
          </div>
          
          {/* Book details info */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 mb-4">Book Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
              <div className="flex items-center gap-2 py-2 border-b border-gray-100">
                <BookOpen size={16} className="text-gray-500" />
                <span className="text-gray-500 w-24">Language:</span>
                <span className="font-medium">{book.language}</span>
              </div>
              
              {book.publisher && (
                <div className="flex items-center gap-2 py-2 border-b border-gray-100">
                  <Building size={16} className="text-gray-500" />
                  <span className="text-gray-500 w-24">Publisher:</span>
                  <span className="font-medium">{book.publisher}</span>
                </div>
              )}
              
              {book.category && (
                <div className="flex items-center gap-2 py-2 border-b border-gray-100">
                  <Globe size={16} className="text-gray-500" />
                  <span className="text-gray-500 w-24">Category:</span>
                  <Link 
                    href={`/categories/${book.category.id}`}
                    className="font-medium hover:text-blue-600"
                  >
                    {book.category.title}
                  </Link>
                </div>
              )}
              
              <div className="flex items-center gap-2 py-2 border-b border-gray-100">
                <Calendar size={16} className="text-gray-500" />
                <span className="text-gray-500 w-24">Published:</span>
                <span className="font-medium">
                  {new Date(book.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric'
                  })}
                </span>
              </div>
            </div>
          </div>
          
          {/* Book description */}
          {book.description && (
            <div className="mb-8">
              <h2 className="text-lg font-bold text-gray-800 mb-4">Summary</h2>
              <div className="prose prose-sm max-w-none text-gray-600">
                {book.description}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default BookPage;