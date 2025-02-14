// // // import React from "react";
// // // import ProjectCard from "../sub/ProjectCard";

// // // const Projects = () => {
// // //   return (
// // //     <div
// // //       className="flex flex-col items-center justify-center py-20"
// // //       id="projects"
// // //     >
// // //       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
// // //         My Projects
// // //       </h1>
// // //       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
// // //         <ProjectCard
// // //           src="/NextWebsite.png"
// // //           title="Modern Next.js Portfolio"
// // //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// // //         />
// // //         <ProjectCard
// // //           src="/CardImage.png"
// // //           title="Interactive Website Cards"
// // //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// // //         />
// // //         <ProjectCard
// // //           src="/SpaceWebsite.png"
// // //           title="Space Themed Website"
// // //           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
// // //         />
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default Projects;


// // "use client";

// // import React, { useState } from "react";
// // import ProjectCard from "../sub/ProjectCard";

// // const projectsData = [
// //   {
// //     id: 1,
// //     title: "Operate AI Chatbots",
// //     description: "AI-powered chatbot system with NLP for real-time conversations.",
// //     src: "/WhatsApp Image 2025-02-11 at 2.41.06 AM.jpeg",
// //     category: "Web2",
// //     liveLink: "#",
// //     sourceCode: "#",
// //   },
// //   {
// //     id: 2,
// //     title: "Crypto Academy",
// //     description: "A decentralized learning platform for blockchain & crypto education.",
// //     src: "/image copy 3.png",
// //     category: "Web3",
// //     liveLink: "#",
// //     sourceCode: "#",
// //   },
// //   {
// //     id: 3,
// //     title: "Amazon Clone",
// //     description: "A full-stack Amazon clone with Next.js, Redux, and Stripe.",
// //     src: "/image.png",
// //     category: "Web2",
// //     liveLink: "#",
// //     sourceCode: "#",
// //   },
// //   {
// //     id: 4,
// //     title: "AI Story Teller",
// //     description: "Generative AI-powered website for creating and sharing AI-generated stories.",
// //     src: "/image copy.png",
// //     category: "Other",
// //     liveLink: "#",
// //     sourceCode: "#",
// //   },
// // ];

// // const categories = ["All", "Web2", "Web3", "Other"];

// // const Projects = () => {
// //   const [selectedCategory, setSelectedCategory] = useState("All");

// //   const filteredProjects = selectedCategory === "All"
// //     ? projectsData
// //     : projectsData.filter((project) => project.category === selectedCategory);

// //   return (
// //     <div className="flex flex-col items-center justify-center py-20" id="projects">
// //       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
// //         My Projects
// //       </h1>

// //       {/* Category Tabs */}
// //       <div className="flex space-x-5 mb-10">
// //         {categories.map((cat) => (
// //           <button
// //             key={cat}
// //             className={`px-5 py-2 rounded-lg text-white transition-all ${
// //               selectedCategory === cat ? "bg-purple-600" : "bg-gray-800 hover:bg-purple-700"
// //             }`}
// //             onClick={() => setSelectedCategory(cat)}
// //           >
// //             {cat}
// //           </button>
// //         ))}
// //       </div>

// //       {/* Project Cards Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
// //         {filteredProjects.map((project) => (
// //           <ProjectCard
// //             key={project.id}
// //             src={project.src}
// //             title={project.title}
// //             description={project.description}
// //             liveLink={project.liveLink}
// //             sourceCode={project.sourceCode}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Projects;



// "use client";

// import React, { useState } from "react";
// import ProjectCard from "../sub/ProjectCard";

// const projectsData = [
//   {
//     id: 1,
//     title: "Operate AI Chatbots",
//     description: "AI-powered chatbot system with NLP for real-time conversations.",
//     src: "/WhatsApp Image 2025-02-11 at 2.41.06 AM.jpeg",
//     category: "Web2",
//     liveLink: "#",
//     sourceCode: "#",
//   },
//   {
//     id: 2,
//     title: "Crypto Academy",
//     description: "A decentralized learning platform for blockchain & crypto education.",
//     src: "/image copy 3.png",
//     category: "Web3",
//     liveLink: "#",
//     sourceCode: "#",
//   },
//   {
//     id: 3,
//     title: "Amazon Clone",
//     description: "A full-stack Amazon clone with Next.js, Redux, and Stripe.",
//     src: "/image.png",
//     category: "Web2",
//     liveLink: "#",
//     sourceCode: "#",
//   },
//   {
//     id: 4,
//     title: "AI Story Teller",
//     description: "Generative AI-powered website for creating and sharing AI-generated stories.",
//     src: "/image copy.png",
//     category: "Other",
//     liveLink: "#",
//     sourceCode: "#",
//   },
// ];

// const categories = ["All", "Web2", "Web3", "Other"];

// const Projects = () => {
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects =
//     selectedCategory === "All"
//       ? projectsData
//       : projectsData.filter((project) => project.category === selectedCategory);

//   return (
//     <div className="flex flex-col items-center justify-center py-20" id="projects">
//       <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
//         My Projects
//       </h1>

//       {/* Category Tabs */}
//       <div className="flex space-x-5 mb-10">
//         {categories.map((cat) => (
//           <button
//             key={cat}
//             className={`px-5 py-2 rounded-lg transition-all text-white ${
//               selectedCategory === cat
//                 ? "bg-purple-600 shadow-md"
//                 : "bg-gray-800 hover:bg-purple-700"
//             }`}
//             onClick={() => setSelectedCategory(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* Project Cards Grid */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
//         {filteredProjects.map((project) => (
//           <ProjectCard
//             key={project.id}
//             src={project.src}
//             title={project.title}
//             description={project.description}
//             liveLink={project.liveLink}
//             sourceCode={project.sourceCode}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


"use client";

import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Operate AI Chatbots",
    description: "AI-powered chatbot system with NLP for real-time conversations.",
    src: "/WhatsApp Image 2025-02-11 at 2.41.06 AM.jpeg",
    category: "Other",
    liveLink: "https://illustrious-pudding-f88e55.netlify.app/",
    sourceCode: "https://github.com/HasanZaigam/Operate-AI-Bot",
  },
  {
    id: 2,
    title: "Crypto Academy",
    description: "A decentralized learning platform for blockchain & crypto education.",
    src: "/image copy 3.png",
    category: "Web3",
    liveLink: "https://cryptoquestsite.netlify.app/",
    sourceCode: "https://github.com/HasanZaigam/CryptoQuest_Academy",
  },
  {
    id: 3,
    title: "Amazon Clone",
    description: "A full-stack Amazon clone with Next.js, Redux, and Stripe.",
    src: "/image.png",
    category: "Web2",
    liveLink: "amazon-nine-coral.vercel.app/",
    sourceCode: "https://github.com/HasanZaigam/Amazon",
  },
  {
    id: 4,
    title: "AI Story Teller",
    description: "Generative AI-powered website for creating and sharing AI-generated stories.",
    src: "/image copy.png",
    category: "Other",
    liveLink: "https://ai-story-teller-ten.vercel.app/",
    sourceCode: "https://github.com/HasanZaigam/AI-Story-Teller",
  },
];

const categories = ["All", "Web2", "Web3", "Other"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filtering logic
  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center py-20 z-[20]" id="projects">
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-10">
        My Projects
      </h1>

      {/* Category Tabs */}
      <div className="flex space-x-5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-5 py-2 rounded-lg transition-all text-white ${
              selectedCategory === cat
                ? "bg-purple-600 shadow-md"
                : "bg-gray-800 hover:bg-purple-700"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            src={project.src}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
