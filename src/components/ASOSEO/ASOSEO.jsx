import React from "react";
import seo from "../../assets/seo.png"

const ASOSEO = () => {
  return (
    <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-12">
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl font-bold">ASO & SEO</h2>
        <p className="text-gray-600">
          At PIXORA Technologies, we specialize in cutting-edge ASO (App Store
          Optimization) and SEO (Search Engine Optimization) services tailored
          to boost your digital presence.
        </p>
        <p className="text-gray-600">
          We leverage industry-leading techniques to enhance your app’s
          visibility in app stores and elevate your website’s ranking on search
          engines.
        </p>
        <p className="text-gray-600">
          With data-driven strategies and ongoing optimization, we ensure your
          brand stands out in the crowded digital landscape.
        </p>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <img
          src={seo}
          alt="ASO and SEO Illustration"
          className="max-w-lg w-full"
        />
      </div>
    </section>
  );
};

export default ASOSEO;
