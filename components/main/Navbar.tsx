// "use client";

// import { Socials } from "@/constants";
// import Image from "next/image";
// import React, { useState } from "react";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState(""); // Track active section

//   const handleClick = (section: string) => {
//     setActiveSection(section); // Update active section state
//     setIsOpen(false); // Close menu on mobile

//     // Smooth scrolling effect
//     const element = document.getElementById(section);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     }
//   };

//   return (
//     <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 sm:px-10">
//       <div className="w-full h-full flex flex-row items-center justify-between m-auto">
//         {/* Logo / Name */}
//         <a href="#" className="h-auto w-auto flex flex-row items-center">
//           <span className="font-bold text-gray-300 hidden md:block">
//             Hasan Zaigam
//           </span>
//         </a>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center justify-between w-[500px] bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full text-gray-200">
//           {["AboutMe", "Experience", "Skills", "Projects"].map((item) => (
//             <button
//               key={item}
//               onClick={() => handleClick(item)}
//               className={`relative text-white transition-all duration-300 group ${
//                 activeSection === item ? "text-purple-400" : "hover:text-purple-400"
//               }`}
//             >
//               {item.replace(/([A-Z])/g, " $1")} {/* Format text */}
//               <span
//                 className={`absolute left-0 bottom-[-3px] h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
//                   activeSection === item ? "w-full" : "w-0 group-hover:w-full"
//                 }`}
//               ></span>
//             </button>
//           ))}
//         </div>

//         {/* Social Icons (Visible in Desktop) */}
//         <div className="hidden md:flex flex-row gap-5">
//           {Socials.map((social) => (
//             <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
//               <Image
//                 src={social.src}
//                 alt={social.name}
//                 width={24}
//                 height={24}
//                 className="cursor-pointer hover:scale-110 transition-transform hover:brightness-125"
//               />
//             </a>
//           ))}
//         </div>

//         {/* Hamburger Menu for Mobile */}
//         <div className="md:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
//             {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden absolute top-16 left-0 w-full backdrop-blur-lg bg-[#03001480] shadow-md border-t border-[#7042f861] flex flex-col text-white text-center py-5 transition-all duration-300">
//           {["AboutMe", "Experience", "Skills", "Projects"].map((item) => (
//             <button
//               key={item}
//               onClick={() => handleClick(item)}
//               className={`py-3 px-5 rounded-md transition-all duration-300 ${
//                 activeSection === item ? "bg-[#ffffff1a] text-purple-400" : "hover:bg-[#ffffff1a] hover:text-purple-400"
//               }`}
//             >
//               {item.replace(/([A-Z])/g, " $1")} {/* Format text */}
//             </button>
//           ))}

//           {/* Social Icons (Visible in Mobile) */}
//           <div className="flex justify-center gap-4 mt-4">
//             {Socials.map((social) => (
//               <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
//                 <Image
//                   src={social.src}
//                   alt={social.name}
//                   width={24}
//                   height={24}
//                   className="cursor-pointer hover:scale-110 transition-transform hover:brightness-125"
//                 />
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;


"use client";

import { Socials } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(""); // Track active section

  // Mapping section names to their corresponding IDs in the DOM
  const sectionIdMap: { [key: string]: string } = {
    AboutMe: "hero",
    Experience: "workexp",
    Skills: "skills",
    Projects: "projects",
    ContactUs: "footer", // Contact Us redirects to Footer
  };

  const handleClick = (section: string) => {
    setActiveSection(section);
    setIsOpen(false); // Close menu on mobile

    const element = document.getElementById(sectionIdMap[section]);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-6 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto">
        {/* Logo / Name */}
        <a href="#" className="h-auto w-auto flex flex-row items-center">
          <span className="font-bold text-gray-300 hidden md:block">
            Hasan Zaigam
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between w-[600px] bg-[#0300145e] border border-[#7042f861] px-6 py-2 rounded-full text-gray-200">
          {["AboutMe", "Experience", "Skills", "Projects", "ContactUs"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`relative text-white transition-all duration-300 group ${
                activeSection === item ? "text-purple-400" : "hover:text-purple-400"
              }`}
            >
              {item.replace(/([A-Z])/g, " $1")} {/* Format text */}
              <span
                className={`absolute left-0 bottom-[-3px] h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 ${
                  activeSection === item ? "w-full" : "w-0 group-hover:w-full"
                }`}
              ></span>
            </button>
          ))}
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex flex-row gap-5">
          {Socials.map((social) => (
            <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
              <Image
                src={social.src}
                alt={social.name}
                width={24}
                height={24}
                className="cursor-pointer hover:scale-110 transition-transform hover:brightness-125"
              />
            </a>
          ))}
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            {isOpen ? <XMarkIcon className="w-7 h-7" /> : <Bars3Icon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full backdrop-blur-lg bg-[#03001480] shadow-md border-t border-[#7042f861] flex flex-col text-white text-center py-5 transition-all duration-300">
          {["AboutMe", "Experience", "Skills", "Projects", "ContactUs"].map((item) => (
            <button
              key={item}
              onClick={() => handleClick(item)}
              className={`py-3 px-5 rounded-md transition-all duration-300 ${
                activeSection === item ? "bg-[#ffffff1a] text-purple-400" : "hover:bg-[#ffffff1a] hover:text-purple-400"
              }`}
            >
              {item.replace(/([A-Z])/g, " $1")} {/* Format text */}
            </button>
          ))}

          {/* Social Icons (Mobile) */}
          <div className="flex justify-center gap-4 mt-4">
            {Socials.map((social) => (
              <a href={social.link} key={social.name} target="_blank" rel="noopener noreferrer">
                <Image
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                  className="cursor-pointer hover:scale-110 transition-transform hover:brightness-125"
                />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

