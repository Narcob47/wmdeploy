import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <div className="mx-48 flex flex-col sm:flex-row-reverse items-center gap-8 rounded-lg p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="/assets/about/3.jpg" // Replace with the actual image path
          alt="What We Do"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Curate Quality Resources for diverse learning needs.</li>
          <li>Provide interactive training sessions and workshops.</li>
          <li>Foster lifelong learning through blogs and a community store.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;
