import React from "react";

const WhoWeAre = () => {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        
    
        <div>
          <h4 className="text-lg font-medium text-[#01294d]">Who we are</h4>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#01294d] mt-4 leading-snug">
            Welcome to <br />
            <span className="text-[#01294d]">PIXORA TECHNOLOGIES</span>
          </h2>
        </div>

   
        <div className="pl-6 border-l-2 border-gray-300">
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            PIXORA technologies is an organization providing IT services,
            consulting and business growth solutions where innovation meets
            creativity in a dynamic digital world.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            PIXORA technologies can bring together digital strategy, deep
            industry knowledge, human sciences, experience design and technical
            expertise to help start-ups & businesses validate, build and scale
            digital business solutions.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We have a professional and expert team associated with us for the
            last 12 years who have developed various software solutions for
            small and medium businesses in the digital field, giving awareness
            to start-ups & businesses on how to grow.
          </p>

          <p className="text-gray-700 text-lg leading-relaxed">
            Forward in the digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
