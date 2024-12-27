import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { fetchBooks, downloadBook } from "../../redux/booksSlice";
import { useDispatch } from '../../redux/hooks';
import { COLORS } from '../../constants/colors';
import Image from 'next/image';

const NewArrivals = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Get the newest 3 books
  const newestBooks = books.slice().sort((a, b) => new Date(b.published_date).getTime() - new Date(a.published_date).getTime()).slice(0, 3);

   const handleDownload = (bookId: number) => {
      dispatch(downloadBook(bookId));
    };

  return (
    <section className="py-16 text-center">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">New Arrivals</h2>
      <p style={{ color: COLORS.black }} className="text-gray-500 mt-4 max-w-xl mx-auto">Check out our latest books and resources.</p>
      <div className="mt-8 flex space-x-4 justify-center">
        {newestBooks.map((book, i) => (
          <div key={i} className="bg-white shadow-lg p-4 rounded-lg">
            <Image src={book.image} height={500} width={500} alt={book.title} className="w-64 h-64 object-cover rounded-md" />
            <h3 style={{ color: COLORS.black }} className="mt-4 font-semibold">{book.title}</h3>
            <p style={{ color: COLORS.black }} className="text-gray-500">K{book.price}</p>
            <button 
            onClick={() => handleDownload(book.id)}
            style={{ backgroundColor: COLORS.button }} 
            className="mt-4 text-white px-4 py-2 rounded-lg"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;
