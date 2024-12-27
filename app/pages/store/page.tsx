"use client";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBooks, downloadBook } from "../../redux/booksSlice";
import { fetchAudioBooks } from "../../redux/audioBookSlice";
// import BookCard from "../../components/store/BookCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useDispatch } from "../../redux/hooks"; // Import the custom hook
import Image from "next/image";
import { COLORS } from "@/app/constants/colors";

const Store = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const audioBooks = useSelector((state: RootState) => state.audioBooks.audioBooks);
  const [category, setCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [showAudioBooks, setShowAudioBooks] = useState(false);

  useEffect(() => {
    dispatch(fetchBooks());
    dispatch(fetchAudioBooks());
  }, [dispatch]);

  // Filter books by selected category and search term
  const filteredBooks = books
    .filter((book) => category === "All" || book.category.toString() === category)
    .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  // Get unique categories for the filter dropdown
  const categories = ["All", ...new Set(books.map((book) => book.category.toString()))];

  // Separate audio books
  const filteredAudioBooks = audioBooks
    .filter((book) => category === "All" || book.category.toString() === category)
    .filter((book) => book.title.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleDownload = (bookId: number) => {
    dispatch(downloadBook(bookId));
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-6">
        {/* Categories Section */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-black mb-4">Categories</h1>
          <div className="flex flex-wrap gap-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-md ${category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Search Section */}
        <div className="mb-6 flex justify-between items-center">
          <input
            type="text"
            placeholder="Search books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-md p-2 text-black w-full"
          />
          <button
            onClick={() => setShowAudioBooks(!showAudioBooks)}
            className="ml-4 border border-gray-300 rounded-md p-2 text-black"
          >
            {showAudioBooks ? "Show Store Books" : "Show Audio Books"}
          </button>
        </div>

        {/* Book List Section */}
        {!showAudioBooks && (
          <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBooks.map((book) => (
              <div key={book.id} className="border border-gray-300 rounded-md p-4">
                <Image src={book.image} width={500} height={500} alt={book.title} className="w-full h-64 object-cover rounded-md" />
                <h2 className="text-xl font-semibold text-black mt-4">{book.title}</h2>
                <p className="text-gray-700 mt-2">{book.author}</p>
                <p className="text-gray-700 mt-2">Price:K{book.price}</p>
                <button className="mt-4 text-blue-500 hover:underline">Read More</button>
                <button
                  onClick={() => handleDownload(book.id)}
                  className="mt-4 text-blue-500 hover:underline"
                >
                  Download
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Audio Books Section */}
        {showAudioBooks && (
          <div className="mt-12">
            <h2 className="text-2xl font-semibold text-black mb-4">Audio Books</h2>
            <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAudioBooks.map((audiobook) => (
                <div key={audiobook.id} className="border border-gray-300 rounded-md p-4">
                  <Image src={audiobook.image} width={500} height={500} alt={audiobook.title} className="w-full h-64 object-cover rounded-md" />
                  <h2 className="text-xl font-semibold text-black mt-4">{audiobook.title}</h2>
                  <p className="text-gray-700 mt-2">{audiobook.author}</p>
                  <p className="text-gray-700 mt-2">Price: {audiobook.price}</p>
                  <button
                    onClick={() => handleDownload(audiobook.id)}
                    className="mt-4 text-white px-4 py-2 rounded-lg"
                    style={{ backgroundColor: COLORS.button }}
                  >
                    Download
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Store;
