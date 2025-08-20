import React from "react";
import customDevImg from "../../assets/custom-devlopment.png"; 

const CustomDevelopment = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex justify-center">
          <img
            src={customDevImg}
            alt="Custom Development"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            Custom Development
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            We provide tailored custom development solutions designed to transform your unique 
            business ideas into reality.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Our expert team specializes in building scalable, secure, and high-performing 
            applications across web, mobile, and enterprise platforms.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            From concept to deployment, we deliver solutions that are aligned with your goals, 
            ensuring seamless integration with your existing systems and workflows.
          </p>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            With <span className="font-semibold">Pixora Technologies</span>, you gain more than 
            software—you gain a competitive edge, built on innovation, flexibility, and reliability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomDevelopment;
