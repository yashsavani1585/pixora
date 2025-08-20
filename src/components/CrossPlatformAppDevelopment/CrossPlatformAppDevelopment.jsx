import React from "react";
import crossPlatformImg from "../../assets/CrossPlatform.png"; // ← replace with your image

const CrossPlatformAppDevelopment = () => {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 py-16 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        
       
        <div className="text-left">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Cross Platform App <br className="hidden md:block" /> Development
          </h2>

          <p className="mt-6 text-gray-700 leading-relaxed">
            PIXORA excels in cross-platform mobile app development, providing 
            businesses with a wide range of mobile applications.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our cross-platform approach ensures clients benefit from a broader 
            reach across various operating systems.
          </p>

          <p className="mt-4 text-gray-700 leading-relaxed">
            Our skilled developers are adept at creating affordable and 
            high-quality mobile apps using top cross-platform frameworks such as 
            <span className="font-semibold"> Xamarin</span>, 
            <span className="font-semibold"> React Native</span>, 
            <span className="font-semibold"> PhoneGap</span>, and 
            <span className="font-semibold"> Appcelerator Titanium</span>.
          </p>
        </div>

       
        <div className="flex justify-center">
          <img
            src={crossPlatformImg}
            alt="Cross Platform App Development"
            className="w-[320px] md:w-[420px] lg:w-[480px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default CrossPlatformAppDevelopment;
