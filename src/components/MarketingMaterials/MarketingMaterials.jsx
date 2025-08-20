import React from "react";
import market from "../../assets/MarketingMatrial.png"

const MarketingMaterials = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between ">
      <div className="md:mr-12 ml-29">
        <h2 className="text-3xl font-bold mb-4">Marketing Materials</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>Brochures & Flyers</li>
          <li>Posters</li>
          <li>Banners (print and digital)</li>
          <li>Billboards</li>
          <li>Print Ads</li>
        </ul>
      </div>
      <img src={market} alt="Marketing" className="w-full max-w-md mt-8 md:mt-0 mr-60" />
    </section>
  );
};

export default MarketingMaterials;
