import React from "react";
import RotatingCircle from "../RotatingCircle/RotatingCircle";

const ExpertsSection = () => {
  return (
    <section className="bg-white py-10 md:py-16 px-4 sm:px-6 lg:px-20">
      <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 lg:gap-16">

        {/* Left Side - Rotating Circle */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="w-[300px] sm:w-[370px] md:w-[420px] lg:w-[500px] aspect-square relative">
            <RotatingCircle />
          </div>
        </div>


        {/* Right Side - Content */}
        <div className="w-full md:w-1/2 max-w-2xl text-center md:text-left">
          <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
            We're a creative bunch
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-3 leading-snug">
            The <span className="text-red-600">Experts</span>{" "}
            <span className="text-gray-900">in Design and Build</span>
          </h2>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            We specialize in building brands, selling products, and telling
            stories. We are a team of creatives who design identities, custom-built
            HTML and Shopify & e-Commerce websites and launch digital products
            that empower teams.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            We rely on the latest and greatest in programming languages,
            specializing in HTML5, CSS, Javascript, Liquid, PHP, Solidity,
            Asp.net, and Python. Some of our favorite frameworks include Angular,
            Express, Bootstrap, JWT, .Net MVC, .Net Core, Django, and WordPress.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Your project might be a website, digital product, brand, or shop.
            Whatever your idea, you’ve come to us for our creativity, but you’ll
            stay because we’ll make your lives easier. In many ways, that’s where
            you’ll get a real return on your investment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertsSection;
