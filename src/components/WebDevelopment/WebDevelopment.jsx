import React from "react";
import webDevImg from "../../assets/web-devlopment.png"; 

const WebDevelopment = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex justify-center">
          <img
            src={webDevImg}
            alt="Web Development Illustration"
            className="w-full max-w-md"
          />
        </div>

 
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            Web Development
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">PIXORA Technologies Pvt. Ltd.</span>, 
            we specialize in crafting cutting-edge web development solutions tailored to your business needs.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Our expert team combines innovation and technology to create responsive, 
            user-friendly websites that enhance your online presence. From sleek design to seamless functionality, 
            we ensure your website not only looks stunning but also performs optimally across all devices.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you’re looking to build a new site or revamp an existing one, 
            PIXORA Technologies Pvt. Ltd. is your trusted partner in driving digital success.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Let us help you transform your vision into a powerful online reality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WebDevelopment;
