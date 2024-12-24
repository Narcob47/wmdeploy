import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <header className="text-center py-16 px-16 mx-48">
      <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        At <span className="font-bold text-red-600">Watchman Missionary Society</span>, we believe in the transformative power of books, ideas, and education. Our mission is rooted in <strong>Analysis, Research, and Problem Solving</strong>, aiming to empower minds and inspire positive change.
      </p>
    </header>
  );
};

export default AboutHeader;
