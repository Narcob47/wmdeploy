import React from "react";
import { COLORS } from '../../constants/colors';

const ContactDetails: React.FC = () => {
  return (
    <div style={{ backgroundColor: COLORS.button }} className=" text-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
      <ul className="space-y-4">
        <li>
          <strong>Email:</strong> contact@yourwebsite.com
        </li>
        <li>
          <strong>Phone:</strong> +1 (123) 456-7890
        </li>
        <li>
          <strong>Address:</strong> 123 Your Street, Your City, Your Country
        </li>
        <li>
          <strong>Working Hours:</strong> Mon - Fri: 9:00 AM - 5:00 PM
        </li>
      </ul>
    </div>
  );
};

export default ContactDetails;
