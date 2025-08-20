import React from "react";


import heroImage from "../../assets/Asthetic.png";


const HeroSection4 = () => {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-xl text-center md:text-left ml-19">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Where <span className="text-red-600">Aesthetics</span>
            <br /> Meet Function.
          </h1>
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            "We bring timeless artistry to life through traditional craftsmanship and modern technology. 
            Our team of skilled designers transforms your imagination into elegant jewelry pieces — 
            from hand sketches to high-end CAD designs."
          </p>
        </div>
        <div className="flex justify-center md:justify-end mt-8 md:mt-0 mr-20">
          <img src={heroImage} alt="Jewelry design process" className="w-full max-w-lg" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection4;