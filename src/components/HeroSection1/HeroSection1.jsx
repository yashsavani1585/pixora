import React from "react";
import heroImg from "../../assets/DesignApp.png";

const HeroSection1 = () => {
  return (
    <section className="bg-[#e9f6fc] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        
     
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Designing Apps <br />
            People{" "}
            <span className="text-red-600">
              Love to Use.
            </span>
          </h1>
          <p className="mt-6 text-gray-700 text-lg md:text-xl leading-relaxed">
            We switch all the channels on to get into people’s hands, homes,
            and minds to radically shift behavior.
          </p>
        </div>

      
        <div className="flex-1 flex justify-center">
          <img
            src={heroImg}
            alt="Designing Apps People Love to Use"
            className="w-full max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection1;
