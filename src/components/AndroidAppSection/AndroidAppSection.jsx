import React from "react";
import androidImg from "../../assets/MobileApp.png"; 

const AndroidAppSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
      
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            Android App <br /> Development
          </h2>
          <p className="mt-4 text-lg font-medium text-gray-700">
            Best Android App Development Services In India
          </p>
          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We specialize in building Android apps that are driven by quality and 
            designed to fulfill our client’s business requirements.
          </p>
          <p className="mt-4 text-gray-700 text-lg leading-relaxed">
            PIXORA proficient Android development team has been innovating, designing, 
            and producing Android apps since the beginning, ensuring clients from all 
            corners of the globe receive outstanding products.
          </p>
        </div>

      
        <div className="flex-1 flex justify-center">
          <img
            src={androidImg}
            alt="Android App Development"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AndroidAppSection;
