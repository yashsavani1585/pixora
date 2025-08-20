import React from "react";
import contact from "../../assets/contact-us.png";

const ContactHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#E6F4FA] text-center px-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-bold mb-10">
        <span className="text-red-500">Drop us Your </span>
        <span className="text-blue-900">Message!</span>
      </h1>

      {/* Illustration */}
      <img
        src={contact}
        alt="Contact Illustration"
        className="w-full max-w-4xl h-auto"
      />
    </div>
  );
};

export default ContactHero;
