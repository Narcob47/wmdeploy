import React from "react";

const Vision: React.FC = () => {
  return (
    <div className="mx-48 flex flex-col sm:flex-row items-center gap-8  rounded-lg p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="/assets/about/2.jpg" // Replace with the actual image path
          alt="Our Vision"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="mt-2 text-gray-600">
          To create a world where knowledge is not just a tool but a catalyst for transformation.
        </p>
      </div>
    </div>
  );
};

export default Vision;
