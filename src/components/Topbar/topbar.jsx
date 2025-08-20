import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaWhatsapp
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="bg-blue-100 w-full mt-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 items-center px-4 py-5 text-sm gap-3">
        {/* Phone */}
        <div className="flex justify-center sm:justify-start">
          <a
            href="tel:+919274279905"
            className="flex items-center gap-2 text-black hover:text-blue-600 transition"
          >
            <FaPhoneAlt /> <span>+91 92742 79905</span>
          </a>
        </div>

        <div className="flex justify-center">
          <a
            href="mailto:pixoratechnologies@gmail.com"
            className="flex items-center gap-2 text-black hover:text-blue-600 transition"
          >
            <FaEnvelope /> <span>pixoratechnologies@gmail.com</span>
          </a>
        </div>

        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-blue-700 transition"
          >
            <FaLinkedin className="text-lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-blue-500 transition"
          >
            <FaTwitter className="text-lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-pink-600 transition"
          >
            <FaInstagram className="text-lg" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-red-600 transition"
          >
            <FaYoutube className="text-lg" />
          </a>
          <a
            href="tel:+919274279905"
            className="text-black hover:text-green-600 transition"
          >
            <FaPhoneAlt className="text-lg" />
          </a>
          <a
            href="https://wa.me/919274279905"
            target="_blank"
            rel="noreferrer"
            className="text-black hover:text-green-500 transition"
          >
            <FaWhatsapp className="text-lg" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default TopBar;
