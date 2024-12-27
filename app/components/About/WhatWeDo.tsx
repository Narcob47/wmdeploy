import Image from "next/image";
import React from "react";

const WhatWeDo: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-48 flex flex-col sm:flex-row-reverse items-center gap-8 rounded-lg p-4 sm:p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <Image
          src="/assets/about/3.jpg" // Replace with the actual image path
          height={500}
          width={500}
          alt="What We Do"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">What We Do</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>It strives to comprehensively address all dimensions of the message, including health, benevolence, literature, evangelism, education, family, and country living.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhatWeDo;