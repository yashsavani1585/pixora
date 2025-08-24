import React from "react";
import { motion } from "framer-motion";

import HeroSection1 from "../../components/HeroSection1/HeroSection1";
import MobileAppSection from "../../components/MobileAppSection/MobileAppSection";
import AndroidAppSection from "../../components/AndroidAppSection/AndroidAppSection";
import FlutterAppDevelopment from "../../components/FlutterAppDevelopment/FlutterAppDevelopment";
import CrossPlatformAppDevelopment from "../../components/CrossPlatformAppDevelopment/CrossPlatformAppDevelopment";

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const MobileDevlopment = () => {
  return (
    <div>
      {/* Hero Section - Animate on Page Load */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <HeroSection1 />
      </motion.div>

      {/* Other Sections - Animate on Scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <MobileAppSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <AndroidAppSection />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <FlutterAppDevelopment />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <CrossPlatformAppDevelopment />
      </motion.div>
    </div>
  );
};

export default MobileDevlopment;
