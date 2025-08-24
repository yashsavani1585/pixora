import React from "react";
import { motion } from "framer-motion";

import HeroSection3 from "../../components/HeroSection3/HeroSection3";
import BrandingIdentity from "../../components/BrandingIdentity/BrandingIdentity";
import MarketingMaterials from "../../components/MarketingMaterials/MarketingMaterials";
import SocialMediaDesign from "../../components/SocialMediaDesign/SocialMediaDesign";
import PackagingDesign from "../../components/PackagingDesign/PackagingDesign";
import IllustrationArt from "../../components/IllustrationArt/IllustrationArt";

// 🔥 FadeUp Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const GraphicsDesign = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section (fade-down for variety) */}
      <motion.div
        initial={{ opacity: 0, y: -60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <HeroSection3 />
      </motion.div>

      {/* Other Sections (fade-up animations) */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <BrandingIdentity />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <MarketingMaterials />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <SocialMediaDesign />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <PackagingDesign />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <IllustrationArt />
      </motion.div>
    </div>
  );
};

export default GraphicsDesign;
