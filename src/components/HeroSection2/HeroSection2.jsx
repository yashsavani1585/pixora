import React from "react";
import heroImg3 from "../../assets/DigitalGrowth.png"

const HeroSection2 = () => {
  return (
    <section className="bg-blue-50 py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Your Partner in <br />
          <span className="text-red-600">Digital Growth.</span>
        </h1>
        <p className="text-gray-600 text-lg">
          We help businesses of all sizes build their digital presence with
          tailored marketing solutions that attract, convert, and retain
          customers. Let’s grow your brand—strategically and sustainably.
        </p>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center">
        <img
          src={heroImg3}
          alt="Digital Growth Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection2;
