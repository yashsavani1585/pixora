import React from "react";
import comingSoonImage from "../../assets/Project.png";

const ComingSoon = () => {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-black">
      <img
        src={comingSoonImage}
        alt="Coming Soon"
        className="w-full h-full object-contain md:object-cover"
      />
    </section>
  );
};

export default ComingSoon;
