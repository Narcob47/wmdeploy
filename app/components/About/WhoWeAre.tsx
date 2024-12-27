import React from "react";

const WhoWeAre: React.FC = () => {
  return (
    <div className="mx-4 sm:mx-8 lg:mx-48 flex flex-col sm:flex-row items-center gap-8 rounded-lg p-4 sm:p-6">
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
          The Watchman Missionary Society is a supporting ministry of the Seventh-day Adventist Church devoted to proclaiming the Three Angels’ Message in its most holistic sense.
        </p>
      </div>
    </div>
  );
};

export default WhoWeAre;