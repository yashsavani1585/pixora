import React from "react";
import mockup from "../../assets/Flluter.png"; 
const FlutterAppDevelopment = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <div className="flex justify-center">
          <img
            src={mockup}
            alt="Flutter app mockup"
            className="w-[280px] md:w-[340px] lg:w-[400px] rounded-2xl "
          />
        </div>

        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Flutter App <br className="hidden md:block" /> Development
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            Premier Flutter app development company specializing in creating
            powerful, intuitive, and robust Android and iOS applications swiftly
            using open-source mobile SDK.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            At Webito Infotech, we offer a team of skilled Flutter developers
            who craft mobile apps with fully functional, rich, and fluid user
            experiences.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Hire dedicated Flutter developers at competitive rates for premium
            Flutter app development services to bring your mobile app idea to life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FlutterAppDevelopment;
