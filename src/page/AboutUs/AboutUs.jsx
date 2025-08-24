import React from "react";
import { motion } from "framer-motion";

import AboutSection from "../../components/AboutSection/AboutSection";
import WhoWeAre from "../../components/WhoWeAre/WhoWeAre";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import HowWeGrow from "../../components/HowWeGrow/HowWeGrow";
import OurJourney from "../../components/OurJourney/OurJourney";
import OurMission from "../../components/OurMission/OurMission";
import OurVision from "../../components/OurVision/OurVision";
import OurServices from "../../components/OurServices/OurServices";

// 🔥 Common animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const AboutUs = () => {
  return (
    <div className="overflow-hidden">
      {/* About Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <AboutSection />
      </motion.div>

      {/* Who We Are */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhoWeAre />
      </motion.div>

      {/* What We Do */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <WhatWeDo />
      </motion.div>

      {/* How We Grow */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <HowWeGrow />
      </motion.div>

      {/* Our Journey */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurJourney />
      </motion.div>

      {/* Our Mission */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurMission />
      </motion.div>

      {/* Our Vision */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurVision />
      </motion.div>

      {/* Our Services */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <OurServices />
      </motion.div>
    </div>
  );
};

export default AboutUs;
