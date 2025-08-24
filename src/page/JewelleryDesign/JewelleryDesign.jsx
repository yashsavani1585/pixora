import React from "react";
import { motion } from "framer-motion";

import HeroSection4 from "../../components/HeroSection4/HeroSection4";
import ManualDesign from "../../components/ManualDesign/ManualDesign";
import CADDesign from "../../components/CADDesign/CADDesign";
import RenderingSection from "../../components/RenderingSection/RenderingSection";

// Animation variants for consistency
const sectionVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const JewelleryDesign = () => {
  return (
    <div>
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={sectionVariant}
      >
        <HeroSection4 />
      </motion.div>

      {/* Manual Design */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <ManualDesign />
      </motion.div>

      {/* CAD Design */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <CADDesign />
      </motion.div>

      {/* Rendering Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <RenderingSection />
      </motion.div>
    </div>
  );
};

export default JewelleryDesign;
