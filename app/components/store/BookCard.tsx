import React from "react";
import Image from "next/image";
import { COLORS } from '../../constants/colors';

interface Book {
  title: string;
  author: string;
  description: string;
  image: string;
}

interface BookProps {
  book: Book;
}

const BookCard: React.FC<BookProps> = ({ book }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
      <Image
        src={book.image}
        alt={book.title}
        width={500}
        height={500}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-bold text-gray-800">{book.title}</h2>
      <p className="text-sm text-gray-500 mt-1">by {book.author}</p>
      <p className="text-sm text-gray-600 mt-2">{book.description}</p>
      <button style={{ backgroundColor: COLORS.button }}  className="mt-4 w-full text-white py-2 px-4 rounded-md hover:bg-blue-700 transition">
        Download
      </button>
    </div>
  );
};

export default BookCard;
