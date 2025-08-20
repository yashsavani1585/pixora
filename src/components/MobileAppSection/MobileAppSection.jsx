import React from "react";
import mobileAppImg from "../../assets/MobileApp.png"; 

const MobileAppSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex justify-center">
          <img
            src={mobileAppImg}
            alt="Mobile App Development"
            className="w-full max-w-md"
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-semibold uppercase text-gray-700">
            Mobile App Development
          </p>
          <h2 className="mt-2 text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            Mobile App <br /> Development Company
          </h2>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We design mobile apps that businesses in improving efficiency in
            operations and better engagement.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            Mobile app developers from Grewon are skilled in providing top-quality
            Android, iOS, and cross-platform application development services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MobileAppSection;
