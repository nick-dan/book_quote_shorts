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
    <div className="h-screen w-full bg-black text-white relative overflow-hidden">
      <BookCard
        book={books[index]}
        onLike={() => console.log("Liked", books[index].title)}
        onShare={() => console.log("Share", books[index].title)}
      />

      <div className="absolute bottom-5 w-full flex justify-center gap-4">
        <button
          onClick={prevBook}
          className="px-4 py-2 bg-gray-800 rounded-lg text-sm"
        >
          Prev
        </button>
        <button
          onClick={nextBook}
          className="px-4 py-2 bg-gray-800 rounded-lg text-sm"
        >
          Next
        </button>
      </div>
    </div>
  );
}
