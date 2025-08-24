import React from "react";
import { motion } from "framer-motion";

import HeroSection from "../../components/HeroSection/HeroSection";
import WebDevelopment from "../../components/WebDevelopment/WebDevelopment";
import Ecommerce from "../../components/Ecommerce/Ecommerce";
import CMS from "../../components/CMS/CMS";
import CRM from "../../components/CRM/CRM";
import CustomDevelopment from "../../components/CustomDevelopment/CustomDevelopment";

// Animation variants
const sectionVariant = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const WebDevelopmentPage = () => {
  return (
    <div>
      {/* Hero Section → animate immediately on page load */}
      <motion.div initial="hidden" animate="visible" variants={sectionVariant}>
        <HeroSection />
      </motion.div>

      {/* Other sections → animate on scroll */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <WebDevelopment />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <Ecommerce />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <CMS />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <CRM />
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariant}
      >
        <CustomDevelopment />
      </motion.div>
    </div>
  );
};

export default WebDevelopmentPage;
