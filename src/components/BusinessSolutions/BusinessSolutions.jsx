import React from "react";
import businessImg from "../../assets/advanceSolution.png";

const BusinessSolutions = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Content */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#01294d] leading-snug">
            We provide advanced solutions to <br /> grow in your online business
          </h2>

          <div className="mt-8 space-y-8">
            {/* Point 1 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Build perfect websites
              </h3>
              <p className="text-gray-700 mt-2">
                Build a perfect and user-friendly website with proper and easy
                management.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Unique experiences
              </h3>
              <p className="text-gray-700 mt-2">
                We have unique experiences in developing customizations,
                problem-solving, and handling ongoing projects.
              </p>
            </div>
          </div>
        </div>

        {/* Right Illustration */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={businessImg}
            alt="Business Growth Illustration"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default BusinessSolutions;
