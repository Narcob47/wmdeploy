"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { fetchBooks } from "../../redux/booksSlice";
import BookCard from "../../components/store/BookCard";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { useDispatch } from "../../redux/hooks"; // Import the custom hook

const Store = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books.books);
  const [category, setCategory] = useState("All");

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  // Filter books by selected category
  const filteredBooks = category === "All"
    ? books
    : books.filter((book) => book.category.toString() === category);

  // Get unique categories for the filter dropdown
  const categories = ["All", ...new Set(books.map((book) => book.category))];

  return (
    <div>
      <Header />
      <div className="container mx-auto px-4 py-6">
        {/* Filter Section */}
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-black">Book Store</h1>
          <div className="flex items-center space-x-4">
            <label htmlFor="category-filter" className="text-lg font-medium text-black">
              Filter by Category:
            </label>
            <select
              id="category-filter"
              value={category}
              onChange={(e: { target: { value: React.SetStateAction<string>; }; }) => setCategory(e.target.value)}
              className="border border-gray-300 rounded-md p-2 text-black"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Book List Section */}
        <div className="text-black grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Store;
