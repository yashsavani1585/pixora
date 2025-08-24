import React from "react";
import { motion } from "framer-motion";

import HeroSection from "../../components/HeroSection/HeroSection";
import WebDevelopment from "../../components/WebDevelopment/WebDevelopment";
import Ecommerce from "../../components/Ecommerce/Ecommerce";
import CMS from "../../components/CMS/CMS";
import CRM from "../../components/CRM/CRM";
import CustomDevelopment from "../../components/CustomDevelopment/CustomDevelopment";

// FadeUp Variant
const fadeUpVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const WebDevelopmentPage = () => {
  return (
    <div>
      {/* Hero Section → animate immediately on page load */}
      <motion.div initial="hidden" animate="visible" variants={fadeUpVariant}>
        <HeroSection />
      </motion.div>

      {/* Other sections → animate on scroll */}
      {[WebDevelopment, Ecommerce, CMS, CRM, CustomDevelopment].map(
        (Section, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariant}
          >
            <Section />
          </motion.div>
        )
      )}
    </div>
  );
};

export default WebDevelopmentPage;
