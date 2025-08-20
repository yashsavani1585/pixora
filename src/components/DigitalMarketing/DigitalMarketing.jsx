import React from "react";
import digital  from "../../assets/DigitalMarketing.png"

const DigitalMarketing1 = () => {
  return (
    <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={digital}
          alt="Digital Marketing Illustration"
          className="max-w-lg w-full"
        />
      </div>

      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">Digital Marketing</h2>
        <p className="text-gray-600">
          At PIXORA Technologies, we specialize in transforming your digital
          presence through innovative digital marketing strategies.
        </p>
        <p className="text-gray-600">
          Our expert team utilizes cutting-edge techniques in SEO, social media
          marketing, and content creation to drive results.
        </p>
        <p className="text-gray-600">
          We tailor each campaign to meet your unique business goals, ensuring
          maximum engagement and conversion rates.
        </p>
      </div>
    </section>
  );
};

export default DigitalMarketing1;
