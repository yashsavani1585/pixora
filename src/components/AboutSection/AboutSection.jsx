import React from "react";
import aboutImg from "../../assets/aword.png"; 
import awardIcon from "../../assets/awordCertificate.png"; 

const AboutSection = () => {
  return (
    <section className="bg-[#e0f2f8] py-20 px-6 md:px-20">
      <div className="grid md:grid-cols-2 items-center gap-12">
        
       
        <div>
          <h4 className="text-lg font-semibold text-[#01294d]">
            We Are PIXORA Solutions
          </h4>

          <h2 className="text-4xl md:text-5xl font-black text-[#01294d] mt-4 leading-snug">
            Curious About Who We Are? <br />
            <span className="text-[#08c1c9]">Step into our realm!</span>
          </h2>

          <p className="mt-6 text-gray-700 text-lg leading-relaxed">
            We're tech enthusiasts, driven by a passion for Excellence,
            Perfectionism, Innovation, and Client-Gratification.
          </p>
        </div>

      
        <div className="flex flex-col items-center">
          <img
            src={aboutImg}
            alt="Team celebrating success"
            className="max-w-full h-auto"
          />

       
          <div className="mt-8 flex items-start gap-4 bg-white p-5 rounded-xl shadow-md max-w-md">
            {awardIcon && (
              <img
                src={awardIcon}
                alt="Award Icon"
                className="w-12 h-12 object-contain"
              />
            )}
            <div>
              <h3 className="font-bold text-gray-900 text-lg">
                Best Awarded Company
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                We adapt our delivery to the way your work, whether as an
                external provider.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
