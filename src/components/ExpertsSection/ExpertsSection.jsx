import React from "react";
import expertsSection from "../../assets/ExprctSection.png";

const ExpertsSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={expertsSection}
          alt="Design and Development Illustration"
          className="w-full max-w-md md:max-w-lg object-contain"
        />
      </div>

      <div className="w-full md:w-1/2 max-w-xl text-center md:text-left">
        <p className="uppercase text-sm font-semibold text-gray-500 tracking-wide">
          We're a creative bunch
        </p>

        <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
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
    </section>
  );
};

export default ExpertsSection;
