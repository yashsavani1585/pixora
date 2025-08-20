import React from "react";

const timelineItems = [
  {
    id: 1,
    title: "Startups",
    color: "#ff6b6b",
    description:
      "We work with founders, turning their ideas into something they can wear with pride. Together we’ll take your product to market, establish a brand, and create an experience that works.",
    buttonText: "Take us through your plans",
  },
  {
    id: 2,
    title: "Growing Brands",
    color: "#ff914d",
    description:
      "Supporting the growth of your business, we breathe new life into the soul of your existing brand. We revitalize identities and bring a focus to service and products as they evolve.",
    buttonText: "Discover how to get to the next level",
  },
  {
    id: 3,
    title: "Corporates",
    color: "#8b5cf6",
    description:
      "We become an extension to your teams – helping established corporations enhance their brands through design and development. Introducing changes that enhance future goals.",
    buttonText: "Tell us about the challenges",
  },
];

const TimelineContent = ({ item }) => (
  <div>
    <h3 className="text-3xl font-bold" style={{ color: item.color }}>
      {item.title}
    </h3>
    <p className="mt-3 text-gray-700 leading-relaxed">{item.description}</p>
    <button
      className="mt-6 px-6 py-2.5 text-white font-semibold rounded-lg shadow-md transition-transform transform hover:scale-105"
      style={{ backgroundColor: item.color }}
    >
      {item.buttonText}
    </button>
  </div>
);

const WhoWeHelp = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h4 className="text-gray-500 uppercase tracking-widest font-medium">
          WHO WE HELP
        </h4>
        <h2 className="text-4xl md:text-5xl font-black text-[#01294d] leading-tight mt-4">
          Design and Develop for Every Stage of Your Journey.
        </h2>
        <p className="text-gray-600 mt-5 text-lg">
          We are a Gujarat-based web agency that believes in connecting people
          to ideas through the power of thoughtful design.
        </p>
      </div>


      <div className="relative">
        <div className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-black transform -translate-x-1/2"></div>

        <div className="space-y-24">
          {timelineItems.map((item, index) => (
            <div key={item.id} className="relative flex items-center w-full">
              <div
                className="hidden md:block absolute left-1/2 w-7 h-7 rounded-full border-4 bg-white shadow-lg transform -translate-x-1/2 z-10"
                style={{ borderColor: item.color }}
              ></div>

              {index % 2 !== 0 ? (
                <>
                  <div className="w-full md:w-1/2 pr-0 md:pr-12 text-center md:text-right">
                    <TimelineContent item={item} />
                  </div>
                  <div className="hidden md:block w-1/2"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block w-1/2"></div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-12 text-center md:text-left">
                    <TimelineContent item={item} />
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
