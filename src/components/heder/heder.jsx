import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import logo from "../../assets/pixoraLogo.png";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const services = [
    { name: "Web Designing & Development", path: "/web-development" },
    { name: "Mobile App Development Company", path: "/mobile-app" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    { name: "Graphics Design", path: "/graphics-design" },
    { name: "Jewellery Design", path: "/jewellery-design" },
  ];

  const isActive = (path) => location.pathname === path;
  const isServiceActive = services.some((s) => s.path === location.pathname);

  // Outside click handler → dropdown band karne ke liye
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServiceOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="w-full shadow-md sticky top-0 bg-white z-50">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-3 relative">
        {/* Logo */}
        <Link to="/home" className="flex items-center gap-3">
          <img src={logo} alt="Pixora Logo" className="h-16 w-auto" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold tracking-wide">
              PIXORA TECHNOLOGIES
            </h1>
            <p className="text-sm md:text-base text-gray-600 font-medium">
              Where Ideas Go Digital.
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-base font-medium items-center">
          <Link
            to="/home"
            className={`transition ${isActive("/home") ? "text-red-500" : "hover:text-gray-700"
              }`}
          >
            Home
          </Link>

          {/* Services Dropdown */}
          {/* Services Dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => setServiceOpen(true)}
            onMouseLeave={() => setServiceOpen(false)}
            ref={dropdownRef}
          >
            <button
              className={`flex items-center gap-1 transition ${serviceOpen || isServiceActive
                  ? "text-red-500"
                  : "hover:text-gray-700"
                }`}
            >
              Services
              {/* Chevron icon tabhi dikhega jab dropdown open ho ya active page ho */}
              {(serviceOpen || isServiceActive) && (
                <FaChevronDown
                  className={`ml-1 transition-transform duration-300 ${serviceOpen ? "rotate-180" : ""
                    }`}
                />
              )}
            </button>

            {/* Dropdown */}
            <div
              className={`absolute left-0 mt-2 w-64 bg-white border rounded shadow-lg space-y-2 z-50 transition-all duration-300 ${serviceOpen ? "block animate-fadeIn" : "hidden"
                }`}
            >
              {services.map((service, index) => (
                <Link
                  key={index}
                  to={service.path}
                  className={`block px-3 py-2 rounded hover:bg-gray-100 transition ${isActive(service.path) ? "text-red-500 font-medium" : ""
                    }`}
                >
                  {service.name}
                </Link>
              ))}
            </div>
          </div>


          <Link
            to="/aboutUs"
            className={`transition ${isActive("/aboutUs") ? "text-red-500" : "hover:text-gray-700"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/project"
            className={`transition ${isActive("/project") ? "text-red-500" : "hover:text-gray-700"
              }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`transition ${isActive("/contact") ? "text-red-500" : "hover:text-gray-700"
              }`}
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700 hover:text-gray-900 transition"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 space-y-3 max-h-[80vh] overflow-y-auto">
          <Link
            to="/home"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-black ${isActive("/home") ? "text-red-500" : "hover:text-gray-400"
              }`}
          >
            Home
          </Link>

          <div>
            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className={`flex items-center justify-between w-full text-left text-black ${mobileServicesOpen || isServiceActive
                  ? "text-red-500"
                  : "hover:text-gray-400"
                }`}
            >
              <span>Services</span>
              <FaChevronDown
                className={`ml-1 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""
                  }`}
              />
            </button>

            {mobileServicesOpen && (
              <div className="mt-2 pl-4 space-y-2 border-l border-gray-200">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    to={service.path}
                    onClick={() => {
                      setMobileServicesOpen(false);
                      setMobileMenuOpen(false);
                    }}
                    className={`block py-2 px-2 text-gray-700 hover:bg-gray-100 rounded ${isActive(service.path)
                        ? "text-red-500 font-medium"
                        : ""
                      }`}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/aboutUs"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-black ${isActive("/aboutUs") ? "text-red-500" : "hover:text-gray-400"
              }`}
          >
            About Us
          </Link>
          <Link
            to="/project"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-black ${isActive("/project") ? "text-red-500" : "hover:text-gray-400"
              }`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className={`block text-black ${isActive("/contact") ? "text-red-500" : "hover:text-gray-400"
              }`}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
