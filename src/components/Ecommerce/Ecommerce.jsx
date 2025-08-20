import React from "react";
import ecommerceImg from "../../assets/E-commerce.png"; 

const Ecommerce = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            Ecommerce
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold">PIXORA Technologies</span>, we offer
            comprehensive e-commerce web development services designed to help your business succeed online.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            From custom e-commerce website design and platform development to secure payment gateway integration 
            and mobile commerce optimization, our expert team ensures your site is user-friendly, scalable, 
            and aligned with your brand.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            We also provide seamless third-party integration, SEO support, and ongoing maintenance 
            to keep your e-commerce site running smoothly.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Whether you’re looking to enhance your online presence or boost sales, 
            we deliver tailored solutions that meet your unique needs.
          </p>
        </div>

 
        <div className="flex-1 flex justify-center">
          <img
            src={ecommerceImg}
            alt="Ecommerce Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Ecommerce;
