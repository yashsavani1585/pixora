import React from "react";
import comingSoonImage from "../../assets/Project.png"; 

const ComingSoon = () => {
  return (
    <section className="w-full h-screen">
      <img
        src={comingSoonImage}
        alt="Coming Soon"
        className="w-full h-full object-cover"
      />
    </section>
  );
};

export default ComingSoon;
