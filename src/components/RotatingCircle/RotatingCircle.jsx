// import React, { useRef, useEffect, useState } from "react";
// import { motion } from "framer-motion";

// // Inner orbit (2 icons)
// const innerOrbitIcons = [
//   { src: "https://via.placeholder.com/50/FF1493/FFFFFF?text=XD", label: "Adobe XD" },
//   { src: "https://via.placeholder.com/50/FF4500/FFFFFF?text=AI", label: "Illustrator" },
// ];

// // Outer orbit (3 icons)
// const outerOrbitIcons = [
//   { src: "https://via.placeholder.com/50/000000/FFFFFF?text=React", label: "React JS" },
//   { src: "https://via.placeholder.com/50/FFD700/000000?text=JS", label: "JavaScript" },
//   { src: "https://via.placeholder.com/50/32CD32/FFFFFF?text=S", label: "Shopify" },
// ];

// export default function RotatingCircle() {
//   const containerRef = useRef(null);
//   const [size, setSize] = useState(0);

//   // Resize observer for responsiveness
//   useEffect(() => {
//     if (!containerRef.current) return;
//     const resizeObserver = new ResizeObserver((entries) => {
//       for (let entry of entries) {
//         setSize(entry.contentRect.width); // container ka width
//       }
//     });
//     resizeObserver.observe(containerRef.current);
//     return () => resizeObserver.disconnect();
//   }, []);

//   const innerRadius = size * 0.28; // inner orbit ka radius
//   const outerRadius = size * 0.45; // outer orbit ka radius

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-white px-4">
//       <div
//         ref={containerRef}
//         className="relative w-[50vw] h-[50vw] max-w-[600px] max-h-[600px]"
//       >
//         {/* Central Circle */}
//         <div className="absolute inset-0 flex items-center justify-center z-30">
//           <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-gray-200 flex items-center justify-center text-lg sm:text-xl font-bold">
//             P
//           </div>
//         </div>

//         {/* White Background Circle */}
//         <div className="absolute inset-[1%] rounded-full border-black z-16">
//           {/* <div className="w-full h-full rounded-full bg-white"></div> */}
//         </div>

//         {/* Blue Background Circle */}
//         <div className="absolute inset-[22%] rounded-full border-black  z-10">
//           <div className="w-full h-full rounded-full bg-blue-100"></div>
//         </div>



//         {/* Inner Orbit (2 icons) */}
//         <div className="absolute inset-[22%] rounded-full border border-gray-300 z-10">
//           <motion.div
//             className="relative w-full h-full"
//             animate={{ rotate: 360 }}
//             transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
//           >
//             {innerOrbitIcons.map((icon, index) => {
//               const angle = (index / innerOrbitIcons.length) * 2 * Math.PI;
//               const x = Math.cos(angle) * innerRadius;
//               const y = Math.sin(angle) * innerRadius;

//               return (
//                 <div
//                   key={index}
//                   className="absolute flex flex-col items-center"
//                   style={{
//                     top: `calc(50% + ${y}px)`,
//                     left: `calc(50% + ${x}px)`,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                 >
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300">
//                     <img src={icon.src} alt={icon.label} className="w-8 h-8 sm:w-10 sm:h-10" />
//                   </div>
//                   <span className="text-xs sm:text-sm mt-1 font-medium text-gray-700">
//                     {icon.label}
//                   </span>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>

//         {/* Outer Orbit (3 icons) */}
//         <div className="absolute inset-0 rounded-full border border-gray-300 z-20">
//           <motion.div
//             className="relative w-full h-full"
//             animate={{ rotate: -360 }}
//             transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//           >
//             {outerOrbitIcons.map((icon, index) => {
//               const angle = (index / outerOrbitIcons.length) * 2 * Math.PI;
//               const x = Math.cos(angle) * outerRadius;
//               const y = Math.sin(angle) * outerRadius;

//               return (
//                 <div
//                   key={index}
//                   className="absolute flex flex-col items-center"
//                   style={{
//                     top: `calc(50% + ${y}px)`,
//                     left: `calc(50% + ${x}px)`,
//                     transform: "translate(-50%, -50%)",
//                   }}
//                 >
//                   <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300">
//                     <img src={icon.src} alt={icon.label} className="w-8 h-8 sm:w-10 sm:h-10" />
//                   </div>
//                   <span className="text-xs sm:text-sm mt-1 font-medium text-gray-700">
//                     {icon.label}
//                   </span>
//                 </div>
//               );
//             })}
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import logo from "../../assets/pixoraLogo.png"
import Ai from "../../assets/adobe-illustrator-cc-3.svg";
import xd from "../../assets/adobe-xd-2.svg";
import js from "../../assets/javascript-r.svg";
import react from "../../assets/react-2.svg";
import shopify from "../../assets/shopify.svg";
import node from "../../assets/nodejs-icon.svg";
import wp from "../../assets/wordpress-icon.svg"

// Inner orbit (2 icons)
const innerOrbitIcons = [
  {
    src: xd,
  },
  {
    src: Ai,
  },
  {
    src: node,
  } 
];

// Outer orbit (3 icons)
const outerOrbitIcons = [
  {
    src: react,
  },
  {
    src: js,
  },
  {
    src: shopify,
  },
   {
    src: wp,
  }
];

export default function RotatingCircle() {
  const containerRef = useRef(null);
  const [size, setSize] = useState(0);

  // Resize observer for responsiveness
  useEffect(() => {
    if (!containerRef.current) return;
    const resizeObserver = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setSize(entry.contentRect.width);
      }
    });
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  const innerRadius = size * 0.28; // inner orbit ka radius
  const outerRadius = size * 0.45; // outer orbit ka radius

  return (
    <div className="flex items-center justify-center min-h-30 bg-white px-4">
      <div
        ref={containerRef}
        className="relative 
  w-[250px] sm:w-[400px] md:w-[600px] lg:w-[600px] xl:w-[600px] 
  aspect-square"
      >
        {/* Central Circle */}
        <div className="absolute inset-0 flex items-center  justify-center z-30">
          <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white border-2 border-black flex items-center justify-center text-lg sm:text-xl font-bold">
            <img
              src={logo}
              alt="Pixora Logo"
              className="w-10 h-10 sm:w-16 sm:h-16"
            />
          </div>
        </div>

        {/* Outer Circle Border */}
        <div className="absolute inset-55 rounded-full border border-black z-12">
          <div className="w-full h-full rounded-full bg-white "></div>

        </div>

        <div className="absolute inset-36 rounded-full border border-black z-2">
          <div className="w-full h-full rounded-full bg-blue-200 "></div>

        </div>

        {/* Blue Inner Circle */}
        <div className="absolute inset-[22%] rounded-full border border-black z-5">
          <motion.div
            className="absolute inset-0 rounded-full border border-black  z-1"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          >
            {innerOrbitIcons.map((icon, index) => {
              const angle = (index / innerOrbitIcons.length) * 2 * Math.PI;
              const x = Math.cos(angle) * innerRadius;
              const y = Math.sin(angle) * innerRadius;

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white shadow-lg flex items-center justify-center border border-gray-300">
                    <img
                      src={icon.src}
                      alt={icon.label}
                      className="w-8 h-8 sm:w-10 sm:h-10"
                    />
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Inner Orbit (2 icons) */}


        {/* Outer Orbit (3 icons) */}
        <div className="absolute inset-[6%] rounded-full border border-black z-20">
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: -360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          >
            {outerOrbitIcons.map((icon, index) => {
              const angle = (index / outerOrbitIcons.length) * 2 * Math.PI;
              const x = Math.cos(angle) * outerRadius;
              const y = Math.sin(angle) * outerRadius;

              return (
                <div
                  key={index}
                  className="absolute flex flex-col items-center"
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-300">
                    <img src={icon.src} alt={icon.label} className="w-9 h-9" />
                  </div>

                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
