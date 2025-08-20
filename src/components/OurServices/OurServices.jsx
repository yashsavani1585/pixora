import React from "react";
import servicesImage from "../../assets/OurService.png"; 
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const OurServices = () => {
  const servicesColumn1 = [
    "Graphics Designing",
    "Application Development",
    "Website Development",
    "Game Development",
    "Business Consulting",
  ];

  const servicesColumn2 = [
    "Social Media Marketing",
    "Search Engine Optimization",
    "Soft Skill Training",
    "Brand Building",
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-left text-[#0d4072] mb-16">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-12 items-center">
          
          <div className="flex justify-center md:col-span-1">
            <img
              src={servicesImage}
              alt="A person at a desk providing services"
              className="w-full max-w-sm"
            />
          </div>

          <div className="md:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8">
              
              <div className="flex flex-col gap-y-6">
                {servicesColumn1.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-2 cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowRight className="text-[#0d4072] text-2xl flex-shrink-0" />
                    <p className="text-lg text-gray-800 font-medium">{service}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-y-6">
                {servicesColumn2.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 transition-transform duration-200 hover:translate-x-2 cursor-pointer"
                  >
                    <MdOutlineKeyboardArrowRight className="text-[#0d4072] text-2xl flex-shrink-0" />
                    <p className="text-lg text-gray-800 font-medium">{service}</p>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;