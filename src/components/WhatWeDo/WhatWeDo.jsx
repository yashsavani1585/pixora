import React from "react";
import whatWeDoImg from "../../assets/whatWeDo.png"
const WhatWeDo = () => {
  return (
    <section className="relative bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img
          src="https://www.transparenttextures.com/patterns/graphy.png"
          alt="background pattern"
          className="w-full h-full object-cover opacity-30"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex justify-center">
          <img
            src={whatWeDoImg}
            alt="What We Do"
            className="w-[85%] md:w-[70%] "
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#01294d] mb-6">
            What We Do
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            PIXORA Technologies Pvt. Ltd. houses a team of dedicated IT
            professionals offering a wide range of services, spanning enterprise
            applications, web portals, e-learning, e-commerce, social networking,
            digital marketing, and comprehensive consulting for enterprises and
            SMEs.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our expertise shines in delivering top-tier mobile app development,
            game development, and web development services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
