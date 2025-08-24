import React from "react";
import manualImage from "../../assets/ManualDesign.png";

const ManualDesign = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={manualImage}
            alt="Manual hand-sketched jewelry design"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
            Manual Design <br /> <span className="text-red-600">(Hand-Sketched)</span>
          </h2>
          <ul className="text-gray-700 space-y-3 text-base sm:text-lg leading-relaxed list-disc list-inside max-w-xl mx-auto lg:mx-0">
            <li>Initial concept illustrations by skilled jewelry artists.</li>
            <li>Pencil-drawn with intricate detailing & color shading.</li>
            <li>Personalized designs tailored to client preferences.</li>
            <li>Perfect for traditional & custom heritage pieces.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManualDesign;
