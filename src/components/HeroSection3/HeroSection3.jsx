import React from "react";
import heroImage from "../../assets/graphics-design.png";

const HeroSection3 = () => {
  return (
    <section className="bg-blue-100 py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
    
        <div className="max-w-xl text-center md:text-left ml-40">
       
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-red-600">"Designs That Speak</span>
            <br />
            <span className="text-gray-900">Louder Than Words."</span>
          </h1>

        
          <p className="text-gray-700 mt-6 text-lg leading-relaxed">
            Your brand deserves design that’s both beautiful and strategic. We deliver 
            sleek, high-impact graphics that build trust, boost recognition, and 
            leave a lasting impression.
          </p>
        </div>

        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={heroImage}
            alt="Designer creating graphics on a computer"
            className="w-full max-w-lg rounded-lg  mr-40"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection3;
