

import React from "react";
import plan from "../../assets/plan.png";
import delivery from "../../assets/Deliver (1).png";
import create from "../../assets/create.png";


const processSteps = [
  {
    title: "Plan",
    bgColor: "bg-red-100",
    iconColor: "#ff6b6b",
    icon: plan,
    description:
      "All great relationships start with a chat. We'll listen to your goals and get to know your business. We'll research your competitors, identify how we can make an impact, and help solve your customer's needs. We work with you to refine your ideas and present solutions which will help achieve your goals.",
  },
  {
    title: "Create",
    bgColor: "bg-orange-50",
    iconColor: "#ff914d",
    icon: create,
    description:
      "Collaboration breeds the best work. We'll listen to your story, look at your aspirations, and create a set of concepts that wow. Together with your input, our designers and developers will create a unique and exciting brand, or website, that you and your business will boldly wear with pride.",
  },
  {
    title: "Deliver",
    bgColor: "bg-purple-100",
    iconColor: "#8b5cf6",
    icon: delivery,
    description:
      "We offer much more than design and build. We give you a powerful marketing tool for your brand that has a focus on creativity, usability, and conversions. The result is a representation of your business that is appealing, functional, and will generate more leads.",
  },
];

const OurWorkSection = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h4 className="text-gray-500 uppercase tracking-widest font-semibold">
          Process
        </h4>
        <h2 className="text-4xl md:text-5xl font-black text-[#01294d] leading-tight mt-4">
          3 Steps to Success
        </h2>
        <p className="text-gray-600 mt-5 text-lg">
          Our process has been fine-tuned over many years to create synergy
          between each of its moving parts, ensuring everything we do is
          deliberate and impactful.
        </p>
      </div>

 
      <div className="grid md:grid-cols-3 gap-10 mt-12">
        {processSteps.map((step, index) => (
          <div key={index}>
          <div
            className={`p-8 rounded-xl ${step.bgColor} flex flex-col items-center text-center shadow-md hover:shadow-lg transition duration-300`}
          >
        
            <div
              className="flex items-center justify-center w-full h- full rounded-full bg-white"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-full h-full object-contain"
              />
            </div>

                </div>
         
            <p className="text-gray-600 mt-4 leading-relaxed text-base">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurWorkSection;
