import React from "react";
import howWeGrowImg from "../../assets/HowWeGrow.png"; 

const HowWeGrow = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#01294d] mb-6">
            How We Grow
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            At PIXORA Technologies Pvt. Ltd., we specialist in simplifying
            complexity and transforming the ordinary into inspiring. We act as
            shape-shifters and magicians adaptable to your business needs. Your
            vision fuels our actions, effortlessly translated into reality.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Our strength lies in imagining creativity while sticking to every
            deadline.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            As a leading IT outsourcing company in India, PIXORA Technologies Pvt.
            Ltd thrives on achieving client satisfaction through custom
            industry-specific solutions that boost businesses.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src={howWeGrowImg}
            alt="How We Grow"
            className="w-[85%] md:w-[70%] "
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeGrow;
