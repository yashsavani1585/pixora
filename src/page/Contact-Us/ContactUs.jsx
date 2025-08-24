import React from "react";
import { motion } from "framer-motion";

import ContactHero from "../../components/ContactHero/ContactHero";
import ContactForm from "../../components/ContactForm/ContactForm";

// 🔥 FadeUp Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const ContactUs = () => {
  return (
    <div className="overflow-hidden">
      {/* Contact Hero Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactHero />
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
};

export default ContactUs;
