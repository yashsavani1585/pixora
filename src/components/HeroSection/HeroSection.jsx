import React from "react";
import heroImage from "../../assets/DigitalExp.png"; 

const HeroSection = () => {
  return (
    <section className="bg-blue-100 py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug">
            Designing Digital{" "}
            <span className="text-red-500">Experiences</span> <br /> That Matter.
          </h1>
          <p className="mt-5 text-gray-600 text-base md:text-lg max-w-xl">
            Your website is more than just a page—it's your brand's first
            impression. <br />
            We create custom, responsive, and user-centered websites that leave
            a lasting impact and drive results.
          </p>

      
        </div>


        <div className="flex-1 flex justify-center">
          <img
            src={heroImage}
            alt="Digital Experience Illustration"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
