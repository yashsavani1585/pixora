import React from "react";
import { motion } from "framer-motion";

import HeroSection2 from "../../components/HeroSection2/HeroSection2";
import ASOSEO from "../../components/ASOSEO/ASOSEO";
import PaidMarketing from "../../components/PaidMarketing/PaidMarketing";
import SocialMediaMarketing from "../../components/SocialMediaMarketing/SocialMediaMarketing";
import DigitalMarketing1 from "../../components/DigitalMarketing/DigitalMarketing";

// 🔥 FadeUp Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const DigitalMarketing = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section with Fade-Down for variety */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroSection2 />
      </motion.div>

      {/* Other sections fade-up */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <DigitalMarketing1 />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ASOSEO />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PaidMarketing />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SocialMediaMarketing />
      </motion.div>
    </div>
  );
};

export default DigitalMarketing;
