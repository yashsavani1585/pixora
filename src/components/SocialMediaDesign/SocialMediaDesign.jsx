import React from "react";
import social from "../../assets/SocialMedia.png"

const SocialMediaDesign = () => {
  return (
    <section className="py-16 px-8 flex flex-col md:flex-row items-center justify-between">
      <img src={social} alt="Social Media" className="w-full max-w-md ml-19" />

      <div className="md:ml-1 mr-60 mt-8 md:mt-0">
        <h2 className="text-3xl font-bold mb-4">Social Media Design</h2>
        <ul className="space-y-3 text-lg text-gray-700">
          <li>Instagram posts & stories</li>
          <li>Facebook ads & banners</li>
          <li>LinkedIn graphics</li>
          <li>YouTube thumbnails</li>
        </ul>
      </div>
    </section>
  );
};

export default SocialMediaDesign;
