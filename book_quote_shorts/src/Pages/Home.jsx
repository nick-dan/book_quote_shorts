import { useState } from "react";
import BookCard from "../Components/BookCard";
import books from "../Data/book";

export default function Home() {
  const [index, setIndex] = useState(0);

  const nextBook = () => {
    setIndex((prev) => (prev + 1) % books.length);
  };

  const prevBook = () => {
    setIndex((prev) => (prev - 1 + books.length) % books.length);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full relative">

      <div className="w-full flex justify-center gap-4 mt-5 mb-5">
        <button
          onClick={prevBook}
          className="px-4 py-2 bg-gray-300 rounded-lg text-sm"
        >
          Prev
        </button>
        <button
          onClick={nextBook}
          className="px-4 py-2 bg-gray-300 rounded-lg text-sm "
        >
          Next
        </button>
      </div>
      <BookCard
        book={books[index]}
      />

    </div>

  );
}
