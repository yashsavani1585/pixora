import React from "react";
import heroImage from "../../assets/Asthetic.png";

const HeroSection4 = () => {
  return (
    <section className="bg-blue-100 py-12 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10">
        
        {/* Left Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Where <span className="text-red-600">Aesthetics</span>
            <br /> Meet Function.
          </h1>
          <p className="text-gray-700 mt-6 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            We bring timeless artistry to life through traditional craftsmanship and modern technology. 
            Our team of skilled designers transforms your imagination into elegant jewelry pieces — 
            from hand sketches to high-end CAD designs.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <img
            src={heroImage}
            alt="Jewelry design process"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection4;
