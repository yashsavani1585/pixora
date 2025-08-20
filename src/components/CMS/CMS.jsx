import React from "react";
import cmsImg from "../../assets/cms.png"; 

const CMS = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        
        <div className="flex-1 flex justify-center">
          <img
            src={cmsImg}
            alt="Content Management System"
            className="w-full max-w-md"
          />
        </div>

   
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0a2540]">
            CMS
          </h2>
          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            A <span className="font-semibold">Content Management System (CMS)</span> 
            is essential for modern businesses seeking to manage digital content efficiently.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Our IT company offers tailored CMS solutions that enable you to create, edit, 
            and manage your website content with ease. Whether you’re looking for a simple 
            platform or a robust, scalable system, our experts provide end-to-end services 
            from installation to customization.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            With a focus on user-friendly interfaces and seamless integration, our CMS solutions 
            enhance your digital presence and streamline operations, ensuring your website remains 
            dynamic and up-to-date without requiring extensive technical knowledge.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            Empower your business with our comprehensive CMS services.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CMS;
