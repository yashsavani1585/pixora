import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp 
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom"; 

import logo from "../../assets/pixoraLogo1.png";

const Footer = () => {
  return (
    <footer className="bg-[#e0f2f8] text-gray-800 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-10">
     
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="Pixora Logo" className="h-26 w-auto" />
            <h2 className="text-xl font-bold text-gray-900 leading-tight">
              PIXORA <br /> TECHNOLOGIES
            </h2>
          </div>
          <p className="mt-2 text-gray-700">Where Ideas Go Digital.</p>
          <p className="mt-4 text-gray-600 text-sm leading-relaxed">
            PIXORA Technologies is a leading tech-giant company in India with
            over years of experience in mobile app development and web
            development services.
          </p>

          <h3 className="mt-6 font-semibold text-gray-900">Follow Us</h3>

          <div className="flex gap-4 mt-3">
            <a href="#" className="text-gray-900 hover:text-blue-600">
              <FaLinkedin size={28} />
            </a>
            <a href="#" className="text-gray-900 hover:text-blue-400">
              <FaTwitter size={28} />
            </a>
            <a href="#" className="text-gray-900 hover:text-pink-500">
              <FaInstagram size={28} />
            </a>
            <a
              href="mailto:pixoratechnologies@gmail.com"
              className="text-gray-900 hover:text-red-500"
            >
              <FaEnvelope size={28} />
            </a>
            <a href="tel:+919274279905" className="text-gray-900 hover:text-green-500">
              <FaPhoneAlt size={28} />
            </a>
            <a
              href="https://wa.me/919274279905"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 hover:text-green-600"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>

        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Get In Touch
          </h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center gap-2">
              <FaEnvelope /> pixoratechnologies@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +91 92742 79905
            </li>
            <li className="flex items-start gap-2">
              <MdLocationOn size={20} />
              <span>
                C2/1212, Pragati IT PARK, <br />
                OPP. AR mall, Mota Varachha, <br />
                Surat, Gujarat 394101
              </span>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link to="/" className="hover:text-blue-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-blue-600">
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/projects" className="hover:text-blue-600">
                Projects
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Services
          </h3>
          <ul className="space-y-3 text-gray-700">
            <li>
              <Link to="/services/mobile-app" className="hover:text-blue-600">
                Mobile App Development
              </Link>
            </li>
            <li>
              <Link to="/services/web-development" className="hover:text-blue-600">
                Web Development
              </Link>
            </li>
            <li>
              <Link to="/services/digital-marketing" className="hover:text-blue-600">
                Digital Marketing
              </Link>
            </li>
            <li>
              <Link to="/services/product-design" className="hover:text-blue-600">
                Product Design
              </Link>
            </li>
            <li>
              <Link to="/services/software-development" className="hover:text-blue-600">
                Software Development
              </Link>
            </li>
            <li>
              <Link to="/services/graphic-design" className="hover:text-blue-600">
                Graphic Design
              </Link>
            </li>
            <li>
              <Link to="/services/jewellery-design" className="hover:text-blue-600">
                Jewellery Design
              </Link>
            </li>
          </ul>
        </div>
      </div>

     
      <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} PIXORA Technologies. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
