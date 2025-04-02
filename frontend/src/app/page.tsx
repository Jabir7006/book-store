import BookSlider from "@/components/BookSlider/BookSliderClient";
import HeroSlider from "@/components/HeroSlider";
import apiClient from "@/lib/api-client";
import { Book } from "@/types/book.type";



export default async function Home() {
  const books = await apiClient.get<{ data: Book[] }>("books");
  return (
    <>
      <HeroSlider />
      <BookSlider books={books.data} />
    </>
  ); 
}
