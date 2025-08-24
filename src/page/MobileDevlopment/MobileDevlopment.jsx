import React from "react";
import { motion } from "framer-motion";

import HeroSection1 from "../../components/HeroSection1/HeroSection1";
import MobileAppSection from "../../components/MobileAppSection/MobileAppSection";
import AndroidAppSection from "../../components/AndroidAppSection/AndroidAppSection";
import FlutterAppDevelopment from "../../components/FlutterAppDevelopment/FlutterAppDevelopment";
import CrossPlatformAppDevelopment from "../../components/CrossPlatformAppDevelopment/CrossPlatformAppDevelopment";

// Fade-up variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // smooth ease-in-out curve
    },
  },
};

// Container with stagger effect
const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25, // delay between each section
    },
  },
};

const MobileDevlopment = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-hidden"
    >
      {/* Hero Section - animate on page load */}
      <motion.div variants={fadeUpVariant}>
        <HeroSection1 />
      </motion.div>

      {/* Mobile App Section */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <MobileAppSection />
      </motion.div>

      {/* Android App Section */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <AndroidAppSection />
      </motion.div>

      {/* Flutter App Development */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <FlutterAppDevelopment />
      </motion.div>

      {/* Cross Platform App Development */}
      <motion.div
        variants={fadeUpVariant}
        whileInView="visible"
        initial="hidden"
        viewport={{ once: true, amount: 0.3 }}
      >
        <CrossPlatformAppDevelopment />
      </motion.div>
    </motion.div>
  );
};

export default MobileDevlopment;
