import React from "react";
import { motion } from "framer-motion";

// Sections
import BrandingSection from "../../components/BrandingSection/BrandingSection";
import ExpertsSection from "../../components/ExpertsSection/ExpertsSection";
import ServiceSection from "../../components/ServiceSection/ServiceSection";
import WhoWeHelp from "../../components/WhoWeHelp/WhoWeHelp";
import BusinessSolutions from "../../components/BusinessSolutions/BusinessSolutions";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import OurWorkSection from "../../components/StepsToSuccess/StepsToSuccess";

// 🔹 Only Fade Up Variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

// 🔹 Animation Wrapper
const AnimateOnScroll = ({ children }) => (
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
  >
    {children}
  </motion.div>
);

const Home = () => {
  return (
    <div className="overflow-hidden">
      <AnimateOnScroll>
        <BrandingSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ExpertsSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <ServiceSection />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <WhoWeHelp />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <BusinessSolutions />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <WhyChooseUs />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <OurWorkSection />
      </AnimateOnScroll>
    </div>
  );
};

export default Home;
