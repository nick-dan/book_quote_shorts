import { Heart, Share2 } from "lucide-react";
import { useState } from "react";
import Book1 from '../assets/Book1.jpg';

export default function BookCard({ book }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [readMore, setReadMore] = useState(false);

  const handleLike = () => {
    setIsLiked((prev) => !prev);
  }

  const handleShare = () => {
    setIsShared((prev) => !prev);
  }

  const handleReadMore = () => {
    setReadMore((prev) => !prev);
  }


  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <img
        src={book.cover}
        alt={book.title}
        className="h-2/3 object-contain rounded-lg shadow-lg"
      />

      <div className="mt-5 ml-4 w-[80vh] h-screen">
        <h2 className="text-black text-2xl font-bold">{book.title}</h2>
        <p className="text-black font-bold">{book.author}</p>
        <p className="text-black mt-2 text-sm">{readMore ? book.description : `${book.description.slice(0, 100)}...`}</p>

        <button onClick = {handleReadMore} className="text-blue-700 m-2">{readMore ? "Show Less": "Read More..."}</button>
      </div>

      <div className="absolute right-100 bottom-80 flex flex-col gap-4">
        <button onClick={handleLike} className=
          {`p-3 rounded-full ${isLiked ? 'bg-red-600' : 'bg-gray-300'}`}>
          <Heart />
        </button>
        <button onClick={handleShare} className={`p-3 rounded-full ${isShared ? 'bg-blue-500' : 'bg-gray-300'}`}>
          <Share2 />
        </button>
      </div>
    </div>
  );
}
