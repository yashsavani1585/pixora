import React from "react";
import teamIllustration from "../../assets/TheBest.png";

const ServiceSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-12">
      
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-snug">
          Choose <span className="text-red-600">The Best</span>{" "}
          <span className="text-gray-900">IT Service Company</span>
        </h2>

        <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
          We believe that each element of a web page or app interface can create
          a memorable experience, transforming your business into something
          exceptional.
        </p>
        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
          Our mission is to provide you with distinctive business assets that
          reflect the unique identity of your brand, enhancing your reputation
          through superior user experience.
        </p>
        <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
          This ensures that users delight in engaging with your brand every time,
          in every interaction.
        </p>
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={teamIllustration}
          alt="Team Illustration"
          className="w-full max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default ServiceSection;
