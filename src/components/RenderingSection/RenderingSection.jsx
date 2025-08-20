import renderingImage from "../../assets/Rendering.png";

const RenderingSection = () => {
  return (
    <section className="py-16 px-6 md:px-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-10 ml-19">
        <div className="flex justify-center md:justify-start">
          <img src={renderingImage} alt="Jewelry rendering" className="w-full max-w-lg" />
        </div>
        {/* Text */}
        <div className="max-w-xl text-center md:text-left mr-40">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Rendering</h2>
          <p className="text-gray-700 mb-4 text-lg leading-relaxed">
            "Rendering helps bring your design to life visually — before the actual piece is made."
          </p>
          <ul className="text-gray-700 space-y-2 text-lg list-disc list-inside">
            <li>High-resolution 3D renderings.</li>
            <li>Realistic textures, lighting, and material finish.</li>
            <li>Multiple perspective views for better visualization.</li>
            <li>Great for client approvals, portfolio showcase, or online presentation.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RenderingSection