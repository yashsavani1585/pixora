import cadImage from "../../assets/Cad.png";


const CADDesign = () => {
  return (
    <section className="py-16 px-6 md:px-12 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ml-19">
        {/* Text */}
        <div className="max-w-xl text-center md:text-left order-2 md:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            CAD Design <br /> (Computer-Aided)
          </h2>
          <ul className="text-gray-700 space-y-2 text-lg list-disc list-inside">
            <li>Precision 3D models created using advanced software.</li>
            <li>Ideal for modern, complex, and technically accurate designs.</li>
            <li>Enables viewing from multiple angles before production.</li>
            <li>Allows smoother transition from design to manufacturing.</li>
          </ul>
        </div>
        {/* Image */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img src={cadImage} alt="CAD jewelry design" className="w-full max-w-lg mr-40" />
        </div>
      </div>
    </section>
  );
};

export default CADDesign