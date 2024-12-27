import React from "react";

const AboutHeader: React.FC = () => {
  return (
    <header className="text-center py-16 px-16 mx-48">
      <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
        About Us
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        The <span className="font-bold text-red-600">Watchman Missionary Society</span>is a supporting ministry of the Seventh-day Adventist Church devoted to proclaiming the Three Angels’ Message in its most holistic sense.

      </p>
    </header>
  );
};

export default AboutHeader;
