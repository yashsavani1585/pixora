import React from "react";

import manualImage from "../../assets/ManualDesign.png";


const ManualDesign = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Image */}
        <div className="flex justify-center md:justify-start ml-19">
          <img src={manualImage} alt="Manual hand-sketched jewelry design" className="w-full max-w-lg" />
        </div>
        {/* Text */}
        <div className="max-w-xl text-center md:text-left mr-40">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Manual Design <br /> (Hand-Sketched)
          </h2>
          <ul className="text-gray-700 space-y-2 text-lg list-disc list-inside">
            <li>Initial concept illustrations done by experienced jewelry artists.</li>
            <li>Pencil-drawn with intricate detailing and color shading.</li>
            <li>Personalized and unique designs tailored to client preferences.</li>
            <li>Ideal for conceptualizing traditional or custom heritage pieces.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ManualDesign