// import Image from "next/image";
// import React, { useState } from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
//   liveLink: string;
//   sourceCode: string;
// }

// const ProjectCard = ({ src, title, description, liveLink, sourceCode }: Props) => {
//   const [isHovered, setIsHovered] = useState(false);

//   return (
//     <div
//       className="relative overflow-hidden rounded-lg shadow-xl border border-[#2A0E61] transition-transform duration-300 hover:scale-105"
//       onMouseEnter={() => setIsHovered(true)}
//       onMouseLeave={() => setIsHovered(false)}
//     >
//       <Image src={src} alt={title} width={600} height={400} className="w-full object-cover" />

//       <div className="p-4 bg-gray-900">
//         <h1 className="text-xl font-semibold text-white">{title}</h1>
//         <p className="mt-2 text-gray-400">{description}</p>
//       </div>

//       {/* Hover Overlay with Buttons */}
//       {isHovered && (
//         <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-80 transition-opacity duration-300">
//           <a href={liveLink} target="_blank" className="mb-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600">
//             Live Project
//           </a>
//           <a href={sourceCode} target="_blank" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
//             Source Code
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProjectCard;




import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  liveLink: string;
  sourceCode: string;
}

const ProjectCard = ({ src, title, description, liveLink, sourceCode }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl border border-[#2A0E61] transition-transform duration-300 hover:scale-105">
      <Image src={src} alt={title} width={600} height={400} className="w-full object-cover" />

      <div className="p-4 bg-gray-900">
        <h1 className="text-xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-400">{description}</p>

        {/* Buttons inside the description section */}
        <div className="mt-4 flex space-x-4">
          <a
            href={liveLink}
            target="_blank"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Live Project
          </a>
          <a
            href={sourceCode}
            target="_blank"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
