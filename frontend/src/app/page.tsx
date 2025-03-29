import BookSlider from "@/components/BookSlider/BookSliderClient";
import HeroSlider from "@/components/HeroSlider";
import apiClient from "@/lib/api-client";

type Book = {
  id: number;
  title: string;
  author: string;
  description: string;
  coverImage: string;
  originalPrice: number;
  discountedPrice: number;
  discountPercentage: number;
  slug: string;
};

export default async function Home() {
  const books = await apiClient.get<{ data: Book[] }>("books");
  console.log(books);
  return (
    <>
      <HeroSlider />
      <BookSlider books={books.data} />
    </>
  );
}
