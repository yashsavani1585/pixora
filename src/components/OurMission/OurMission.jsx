import React from "react";
import missionImage from "../../assets/OurMission.png";

const OurMission = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src={missionImage}
            alt="Our Mission Illustration"
            className="w-full max-w-md"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d4072] mb-6">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            At PIXORA Technologies, our mission is to empower businesses with
            cutting-edge digital tools and expert consulting services that drive
            growth, enhance efficiency, and foster innovation.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We are committed to delivering excellence in every project we
            undertake, ensuring our clients achieve their business objectives
            with confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
