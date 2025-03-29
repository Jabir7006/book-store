"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BookCard from "../BookCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Book } from "@/lib/data";

// Custom prev arrow component
const PrevArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 rounded-full w-10 h-10 shadow-md transition-all duration-200 flex items-center justify-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-200"
    onClick={onClick}
    aria-label="Previous items"
  >
    <ChevronLeft className="text-blue-500" size={24} />
  </button>
);

// Custom next arrow component
const NextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-blue-50 rounded-full w-10 h-10 shadow-md transition-all duration-200 flex items-center justify-center hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-200"
    onClick={onClick}
    aria-label="Next items"
  >
    <ChevronRight className="text-blue-500" size={24} />
  </button>
);

interface BookSliderClientProps {
  books: Book[];
  title?: string;
}

export default function BookSlider({
  books,
  title = "ধামাকা ডিসকাউন্ট",
}: BookSliderClientProps) {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };

  // // Loading skeleton
  // if (!isClient) {
  //   return (
  //     <div className="py-8">
  //       <div className="flex items-center mb-6">
  //         <div className="h-8 bg-gray-200 rounded w-48 animate-pulse"></div>
  //       </div>
  //       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
  //         {[...Array(5)].map((_, i) => (
  //           <div key={i} className="bg-white rounded-lg shadow-sm h-full">
  //             <div className="aspect-[3/4] bg-gray-200 rounded-t-lg animate-pulse"></div>
  //             <div className="p-3">
  //               <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
  //               <div className="h-3 bg-gray-200 rounded w-3/4 mb-2 animate-pulse"></div>
  //               <div className="h-4 bg-gray-200 rounded w-1/2 mt-2 animate-pulse"></div>
  //             </div>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <section className="py-8 overflow-hidden">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="text-red-500 mr-2">💥</span>
          {title}
        </h2>
        {books?.length > 5 && (
          <a
            href="/discounted-books"
            className="text-blue-500 hover:text-blue-700 text-sm font-medium"
          >
            সবগুলো দেখুন &rarr;
          </a>
        )}
      </div>

      <div className="px-4 -mx-4">
        <Slider {...settings}>
          {books?.map((book) => (
            <div key={book.id} className="px-2">
              <BookCard {...book} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
