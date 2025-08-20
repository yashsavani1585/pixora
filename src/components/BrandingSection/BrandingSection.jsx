import React from "react";
import design from "../../assets/Design.png"; 

const BrandingSection = () => {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-bold leading-snug">
          <span className="text-red-600">Branding,</span>{" "}
          <span className="text-gray-900">Design and Development</span>
        </h2>
        <p className="mt-4 text-gray-700 text-base md:text-lg">
          We are a team of creatives who design identities, custom-built HTML
          and Shopify websites, and launch digital products that empower teams.
        </p>
      </div>

      <div className="w-full max-w-lg">
        <img
          src={design} // ✅ use imported image
          alt="Design and Development Illustration"
          className="w-full h-auto bg-blue-100"
        />
      </div>
    </section>
  );
};

export default BrandingSection;
