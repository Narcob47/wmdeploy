import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div className="mx-48 flex flex-col sm:flex-row items-center gap-8 rounded-lg  p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="/assets/about/1.jpg" // Replace with the actual image path
          alt="Who We Are"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">Who We Are</h2>
        <p className="mt-2 text-gray-600">
          We are a community of passionate educators, learners, and creators, dedicated to promoting knowledge through curated resources and training programs.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;
