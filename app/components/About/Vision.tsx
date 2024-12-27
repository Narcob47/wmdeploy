import Image from "next/image";
import React from "react";

const Vision: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-48 flex flex-col sm:flex-row items-center gap-8 rounded-lg p-4 sm:p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <Image
          src="/assets/about/2.jpg" // Replace with the actual image path
          width={500}
          height={500}
          alt="Our Vision"
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision</h2>
        <p className="mt-2 text-gray-600">
          The Society is dedicated to training and supporting missionaries to serve in the mission field, focusing on both pioneering efforts and nurturing the Church of God in various parts of Zambia and around the world. Through its mission, the Watchman Missionary Society seeks to advance God’s kingdom in a practical and transformative way.
        </p>
      </div>
    </div>
  );
};

export default Vision;