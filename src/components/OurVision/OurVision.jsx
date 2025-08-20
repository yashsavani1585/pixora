import React from "react";
import visionImage from "../../assets/OurVision.png"; 

const OurVision = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0d4072] mb-6">
            Our Vision
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-10">
            At PIXORA Technologies, we are driven by a vision for the future and
            a set of ambitious goals that guide our growth and development:
          </p>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                1
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Continued Innovation:
                </h3>
                <p className="text-gray-600">
                  We aim to stay at the forefront of digital innovation,
                  continuously improving our existing solutions and developing
                  new ones to meet the evolving needs of our clients.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                2
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Customer-Centric Growth:
                </h3>
                <p className="text-gray-600">
                  Our customers are at the heart of everything we do. We strive
                  to deepen our understanding of their needs and challenges,
                  delivering solutions that provide tangible value and drive
                  their success.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                3
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Expanding Reach:
                </h3>
                <p className="text-gray-600">
                  We plan to extend our services to a wider audience, helping
                  more businesses across different industries benefit from our
                  expertise and innovative solutions.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                4
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  Sustainability and Responsibility:
                </h3>
                <p className="text-gray-600">
                  As we grow, we are committed to operating sustainably and
                  responsibly. We aim to make a positive impact not only on our
                  clients but also on the broader community and environment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={visionImage}
            alt="Our Vision Illustration"
            className="w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
