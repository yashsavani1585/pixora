import React from "react";
import heroImage from "../../assets/graphics-design.png";

const HeroSection3 = () => {
  return (
    <section className="bg-blue-100 py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-red-600">"Designs That Speak</span>
            <br />
            <span className="text-gray-900">Louder Than Words."</span>
          </h1>

          <p className="text-gray-700 mt-6 text-base sm:text-lg md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            Your brand deserves design that’s both beautiful and strategic. We deliver 
            sleek, high-impact graphics that build trust, boost recognition, and 
            leave a lasting impression.
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Designer creating graphics on a computer"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection3;
