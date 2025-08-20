import React from "react";
import crmImg from "../../assets/crm.png"; 
const CRM = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            CRM
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            We offer cutting-edge CRM solutions designed to streamline your business 
            operations and enhance customer relationships.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Our CRM systems provide a comprehensive platform that integrates customer data, 
            automates marketing and sales processes, and ensures seamless communication.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            With our expertise, your business can achieve higher efficiency, improved customer 
            satisfaction, and data-driven decision-making.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you are a small business or a large enterprise, PIXORA Technologies 
            tailors CRM solutions to meet your specific needs, empowering you to build stronger 
            connections and drive growth in today’s competitive market.
          </p>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={crmImg}
            alt="Customer Relationship Management"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CRM;
