"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "./ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Custom prev arrow component
const PrevArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
    onClick={onClick}
    aria-label="Previous slide"
  >
    <ChevronLeft className="text-gray-700" size={24} />
  </button>
);

// Custom next arrow component
const NextArrow = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => (
  <button
    className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white rounded-full p-2 shadow-md transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400"
    onClick={onClick}
    aria-label="Next slide"
  >
    <ChevronRight className="text-gray-700" size={24} />
  </button>
);

interface BannerSlide {
  id: number;
  image: string;
  alt: string;
}

const bannerSlides: BannerSlide[] = [
  {
    id: 1,
    image: "/banners/slider1.webp",
    alt: "Promotional banner 1",
  },
  {
    id: 2,
    image: "/banners/slider2.webp",
    alt: "Promotional banner 2",
  },
  {
    id: 3,
    image: "/banners/slider3.webp",
    alt: "Promotional banner 3",
  },
];

export default function HeroSlider(): React.ReactNode {
  // Prevent slick initialization during SSR
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: "slick-dots custom-dots",
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center gap-2 absolute bottom-4 left-0 right-0 z-10">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-white/50 hover:bg-white/80 rounded-full transition-all duration-200"></div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  if (!isClient) {
    return (
      <div className="relative aspect-[16/5] sm:aspect-[16/5] md:aspect-[16/5] lg:aspect-[21/5] bg-gray-100 animate-pulse">
        <div className="absolute inset-0 flex items-center justify-center">
          <p className="sr-only">Loading slider...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-gray-50 my-4">
      <Container>
        <div className="relative rounded-lg overflow-hidden shadow-sm">
          <Slider {...settings}>
            {bannerSlides.map((slide) => (
              <div key={slide.id} className="relative focus:outline-none">
                <div className="relative aspect-[16/5] sm:aspect-[16/5] md:aspect-[16/5] lg:aspect-[21/5]">
                  <Image
                    src={slide.image}
                    alt={slide.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                    className="object-cover object-center"
                    priority={slide.id === 1}
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </div>
  );
}
