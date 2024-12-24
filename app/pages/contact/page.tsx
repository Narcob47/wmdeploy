import React from "react";
import ContactForm from "../../components/contactus/ContactForm";
import ContactDetails from "../../components/contactus/ContactDetails";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const ContactUs: React.FC = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-10 text-center">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm />
          <ContactDetails />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
