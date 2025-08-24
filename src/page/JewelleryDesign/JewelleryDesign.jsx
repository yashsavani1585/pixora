import React from "react";
import { motion } from "framer-motion";

import HeroSection4 from "../../components/HeroSection4/HeroSection4";
import ManualDesign from "../../components/ManualDesign/ManualDesign";
import CADDesign from "../../components/CADDesign/CADDesign";
import RenderingSection from "../../components/RenderingSection/RenderingSection";

// Fade-up animation variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth easing
    },
  },
};

// Container with stagger effect
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // delay between sections
    },
  },
};

const JewelleryDesign = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-hidden" // prevents scrollbars when animating
    >
      {/* Hero Section */}
      <motion.div variants={fadeUpVariant}>
        <HeroSection4 />
      </motion.div>

      {/* Manual Design */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <ManualDesign />
      </motion.div>

      {/* CAD Design */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CADDesign />
      </motion.div>

      {/* Rendering Section */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RenderingSection />
      </motion.div>
    </motion.div>
  );
};

export default JewelleryDesign;
