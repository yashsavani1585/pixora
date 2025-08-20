import React from "react";
import brand from "../../assets/Brand.png"

const BrandingIdentity = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <img src={brand} alt="Branding" className="w-full max-w-md ml-29" />

      <div className="md:ml-1 mr-60 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">Branding & Identity</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>Logo and Identity Design</li>
          <li>Brand Strategy</li>
          <li>Print Collateral</li>
          <li>Investor Decks</li>
          <li>Brand Collateral (folders, envelopes, etc.)</li>
        </ul>
      </div>
    </section>
  );
};

export default BrandingIdentity;
