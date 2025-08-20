import React from "react";
import packagDesig from "../../assets/PackingDesign.png"

const PackagingDesign = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between ">
      <div className="md:mr-12 ml-19">
        <h2 className="text-3xl font-bold mb-4">Packaging Design</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>Product Packaging</li>
          <li>Label Design</li>
          <li>Retail Display Graphics</li>
        </ul>
      </div>
      <img src={packagDesig} alt="Packaging" className="w-full max-w-md mt-8 md:mt-0 mr-60" />
    </section>
  );
};

export default PackagingDesign;
