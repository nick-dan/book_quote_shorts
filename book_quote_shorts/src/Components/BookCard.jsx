import { Heart, Share2 } from "lucide-react";

export default function BookCard({ book, onLike, onShare }) {
  return (
    <div className="relative h-screen w-full flex flex-col items-center justify-center bg-gray-900 text-white">
      <img
        src={book.cover}
        alt={book.title}
        className="h-2/3 object-contain rounded-lg shadow-lg"
      />
      
      <div className="absolute bottom-20 left-5 w-3/4">
        <h2 className="text-2xl font-bold">{book.title}</h2>
        <p className="text-gray-300">{book.author}</p>
        <p className="mt-2 text-sm line-clamp-3">{book.description}</p>
      </div>

      <div className="absolute right-5 bottom-24 flex flex-col gap-4">
        <button onClick={onLike} className="p-3 rounded-full bg-pink-600">
          <Heart />
        </button>
        <button onClick={onShare} className="p-3 rounded-full bg-blue-600">
          <Share2 />
        </button>
      </div>
    </div>
  );
}
