import React from "react";
import { FaMedal, FaLightbulb, FaTrophy } from "react-icons/fa";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Quality",
      desc: "We know the value of quality. We never compromise the standard of our work and design.",
      icon: <FaMedal className="text-black-500" />,
    },
    {
      title: "Innovation",
      desc: "Our team is always striving to innovate and deliver solutions that make your project stand out.",
      icon: <FaLightbulb className="text-black-500" />,
    },
    {
      title: "100% Satisfaction",
      desc: "Your satisfaction is our top priority. We go the extra mile to ensure you are happy with the outcome.",
      icon: <FaTrophy className="text-black-500" />,
    },
  ];

  return (
    <section className="bg-white py-16 px-6 md:px-20">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Have an idea? Work with us and see how it goes. We promise to go the
          extra mile for every project that we take on board.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-blue-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-center"
          >
           
            <div className="text-5xl mb-4 flex justify-center">
              {feature.icon}
            </div>

            
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              {feature.title}
            </h3>

            
            <p className="text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
