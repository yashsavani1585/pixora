import React from "react";
import renderingImage from "../../assets/Rendering.png";

const RenderingSection = () => {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        
        {/* Left - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-1">
          <img
            src={renderingImage}
            alt="Jewelry rendering"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left order-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-6">
            Rendering
          </h2>
          <p className="text-gray-700 mb-4 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Rendering helps bring your design to life visually — before the actual piece is made.
          </p>
          <ul className="text-gray-700 space-y-3 text-base sm:text-lg list-disc list-inside max-w-xl mx-auto lg:mx-0">
            <li>High-resolution 3D renderings.</li>
            <li>Realistic textures, lighting, and material finish.</li>
            <li>Multiple perspective views for better visualization.</li>
            <li>Great for client approvals, portfolio showcase, or online presentation.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default RenderingSection;
