import React from "react";
import { motion } from "framer-motion";
import social from "../../assets/SocialMedia.png";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const SocialMediaDesign = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-12">
      <motion.div
        className="container mx-auto flex flex-col lg:flex-row items-center gap-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUpVariant}
      >
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img 
            src={social} 
            alt="Social Media Design" 
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain"
          />
        </div>

        {/* Right Side - Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Social Media Design</h2>
          <ul className="space-y-3 text-base sm:text-lg text-gray-700 list-disc list-inside">
            <li>Instagram posts & stories</li>
            <li>Facebook ads & banners</li>
            <li>LinkedIn graphics</li>
            <li>YouTube thumbnails</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default SocialMediaDesign;
