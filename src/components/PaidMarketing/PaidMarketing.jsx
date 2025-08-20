import React from "react";
import paidmark from "../../assets/paidMarketing.png"

const PaidMarketing = () => {
  return (
    <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      {/* Left Image */}
      <div className="lg:w-1/2 flex justify-center">
        <img
          src={paidmark}
          alt="Paid Marketing Illustration"
          className="max-w-lg w-full"
        />
      </div>

      {/* Right Content */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">Paid Marketing</h2>
        <p className="text-gray-600">
          At PIXORA Technologies, we specialize in driving your business to new
          heights with expert paid marketing services.
        </p>
        <p className="text-gray-600">
          Our team crafts tailored strategies that maximize ROI by targeting the
          right audience with precision.
        </p>
        <p className="text-gray-600">
          We leverage platforms like Google Ads and social media to ensure your
          brand stands out in a crowded market.
        </p>
      </div>
    </section>
  );
};

export default PaidMarketing;
