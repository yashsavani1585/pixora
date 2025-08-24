import React from "react";
import cadImage from "../../assets/Cad.png";

const CADDesign = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
            CAD Design <br />
            <span className="text-blue-600">(Computer-Aided)</span>
          </h2>
          <ul className="text-gray-700 space-y-3 text-base sm:text-lg leading-relaxed list-disc list-inside max-w-xl mx-auto lg:mx-0">
            <li>Precision 3D models created using advanced software.</li>
            <li>Perfect for modern, complex & technically accurate designs.</li>
            <li>View from multiple angles before production.</li>
            <li>Seamless transition from design to manufacturing.</li>
          </ul>
        </div>

        {/* Right - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
          <img
            src={cadImage}
            alt="CAD jewelry design"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CADDesign;
