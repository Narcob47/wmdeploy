import React from "react";

const WhyChooseUs: React.FC = () => {
  return (
    <div className="mx-48 flex flex-col sm:flex-row-reverse items-center gap-8 rounded-lg p-6">
      {/* Image */}
      <div className="w-full sm:w-1/2">
        <img
          src="/assets/about/4.jpg" // Replace with the actual image path
          alt="Why Choose Us"
          className="w-74 h-auto rounded-lg "
        />
      </div>

      {/* Content */}
      <div className="w-full sm:w-1/2">
        <h2 className="text-2xl font-semibold text-gray-800">Why Choose Us?</h2>
        <ul className="mt-2 text-gray-600 list-disc list-inside">
          <li>Personalized Learning tailored to real-world challenges.</li>
          <li>Accessible & Affordable resources for everyone.</li>
          <li>Supportive Community of global learners and thinkers.</li>
        </ul>
      </div>
    </div>
  );
};

export default WhyChooseUs;
