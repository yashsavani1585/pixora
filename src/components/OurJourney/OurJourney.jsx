import React from "react";

const OurJourney = () => {
  return (
    <section className="bg-[#0d4072] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          OUR JOURNEY
        </h2>

        {/* Content in Two Columns */}
        <div className="grid md:grid-cols-2 gap-12 text-gray-100 text-lg leading-relaxed">
          <p>
            PIXORA Technologies was founded with a vision to transform the
            digital landscape for businesses. From our humble beginnings, we
            have grown into a leading IT company, known for our innovative
            solutions and unwavering commitment to excellence. Our journey began
            with a small team of passionate professionals who shared a common
            goal: to help businesses harness the power of digital technology to
            thrive in a competitive market.
          </p>
          <p>
            With dedication and a customer-centric approach, we steadily
            expanded our portfolio, offering a wide range of services including
            logo design, digital cards, digital catalogs, and business
            consulting. Our innovative spirit led us to develop our flagship
            app, DMT Poster and Video Maker, which has become an indispensable
            tool for businesses looking to enhance their digital presence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurJourney;
