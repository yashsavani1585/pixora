import React from "react";
import socialMediaMarketing from "../../assets/socialMarketing.png"

const SocialMediaMarketing = () => {
  return (
    <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold text-red-600">
          Social Media Marketing
        </h2>
        <p className="text-gray-600">
          We specialize in transforming your social media presence into a
          powerful marketing tool.
        </p>
        <p className="text-gray-600">
          Our Social Media Marketing services are designed to enhance your
          brand’s visibility and engagement across platforms with cutting-edge
          strategies and insights.
        </p>
        <p className="text-gray-600">
          From content creation to performance analysis, we handle every aspect
          of your strategy with precision.
        </p>
      </div>

      {/* Right Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={socialMediaMarketing}
          alt="Social Media Marketing Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </section>
  );
};

export default SocialMediaMarketing;
