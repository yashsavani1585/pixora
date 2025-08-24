import React from "react";
import brand from "../../assets/Brand.png";

const BrandingIdentity = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src={brand}
            alt="Branding"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Branding & Identity</h2>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 list-disc list-inside">
            <li>Logo and Identity Design</li>
            <li>Brand Strategy</li>
            <li>Print Collateral</li>
            <li>Investor Decks</li>
            <li>Brand Collateral (folders, envelopes, etc.)</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default BrandingIdentity;
