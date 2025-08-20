import React from "react";
import Ills from "../../assets/CustomArt.png"

const IllustrationArt = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <img src={Ills} alt="Illustration" className="w-full max-w-md ml-19" />

      <div className="md:ml-12 mt-8 md:mt-0 mr-60">
        <h2 className="text-3xl font-bold mb-4">Illustration & Custom Art</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>Icons</li>
          <li>Character Design</li>
          <li>Custom Illustrations</li>
          <li>Visual Storytelling</li>
        </ul>
      </div>
    </section>
  );
};

export default IllustrationArt;
