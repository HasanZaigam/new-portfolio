// // import React from "react";
// // import {
// //   RxDiscordLogo,
// //   RxGithubLogo,
// //   RxInstagramLogo,
// //   RxTwitterLogo,
// //   RxLinkedinLogo,
// // } from "react-icons/rx";

// // import { FaYoutube } from "react-icons/fa";

// // const Footer = () => {
// //   return (
// //     <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
// //         <div className="w-full flex flex-col items-center justify-center m-auto">
// //             <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                

// //                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
// //                     <div className="font-bold text-[16px]">Community</div>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <FaYoutube />
// //                         <span className="text-[15px] ml-[6px]">Youtube</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <RxGithubLogo />
// //                         <span className="text-[15px] ml-[6px]">Github</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <RxDiscordLogo />
// //                         <span className="text-[15px] ml-[6px]">Discord</span>    
// //                     </p>
// //                 </div>
// //                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
// //                     <div className="font-bold text-[16px]">Social Media</div>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <FaYoutube />
// //                         <span className="text-[15px] ml-[6px]">Instagram</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <RxGithubLogo />
// //                         <span className="text-[15px] ml-[6px]">Twitter</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
// //                         <RxDiscordLogo />
// //                         <span className="text-[15px] ml-[6px]">Linkedin</span>    
// //                     </p>
// //                 </div>
// //                 <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
// //                     <div className="font-bold text-[16px]">About</div>
// //                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                     
// //                         <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                      
// //                         <span className="text-[15px] ml-[6px]">Learning about me</span>    
// //                     </p>
// //                     <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
// //                         <span className="text-[15px] ml-[6px]">mifwebchain@gmail.com</span>    
// //                     </p>
// //                 </div>
// //             </div>

// //             <div className="mb-[20px] text-[15px] text-center">
// //                 &copy; WebChain Dev 2023 Inc. All rights reserved
// //             </div>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Footer

// import React from "react";
// import { RxGithubLogo, RxInstagramLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="w-full h-full text-gray-200 shadow-lg p-6 flex flex-col items-center justify-center">
//       <div className="w-full flex flex-wrap justify-around">
        
//         {/* Community Section */}
//         <div className="min-w-[200px] flex flex-col items-center">
//           <h3 className="font-bold text-lg mb-2">Community</h3>
//           <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-red-500">
//             <FaYoutube className="mr-2" /> YouTube
//           </a>
//           <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-gray-400">
//             <RxGithubLogo className="mr-2" /> GitHub
//           </a>
//         </div>

//         {/* Social Media Section */}
//         <div className="min-w-[200px] flex flex-col items-center">
//           <h3 className="font-bold text-lg mb-2">Social Media</h3>
//           <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-pink-500">
//             <RxInstagramLogo className="mr-2" /> Instagram
//           </a>
//           <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-400">
//             <RxTwitterLogo className="mr-2" /> Twitter
//           </a>
//           <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-600">
//             <RxLinkedinLogo className="mr-2" /> LinkedIn
//           </a>
//         </div>

//         {/* About Section */}
//         <div className="min-w-[200px] flex flex-col items-center">
//           <h3 className="font-bold text-lg mb-2">About</h3>
//           <a href="/sponsor" className="my-2 hover:text-yellow-400">Become Sponsor</a>
//           <a href="/about" className="my-2 hover:text-green-400">Learn About Me</a>
//           <a href="mailto:mifwebchain@gmail.com" className="my-2 hover:text-gray-400">mifwebchain@gmail.com</a>
//         </div>

//       </div>

//       <div className="mt-6 text-sm text-center">
//         &copy; WebChain Dev 2025 Inc. All rights reserved
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full text-gray-200 shadow-lg p-6 flex flex-col items-center justify-center">
      <div className="w-full  z-[20] flex flex-wrap justify-around text-center md:text-left">
        
        {/* Social Media Section */}
        <div className="min-w-[150px] flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-2">Social Media</h3>
          <a href="https://github.com/Hasan-Shaikh-Dev" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-gray-400">
            <RxGithubLogo className="mr-2" /> GitHub
          </a>
          <a href="https://twitter.com/hasanshaikhdev" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-400">
            <RxTwitterLogo className="mr-2" /> Twitter
          </a>
          <a href="https://linkedin.com/in/hasanshaikhdev" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-600">
            <RxLinkedinLogo className="mr-2" /> LinkedIn
          </a>
        </div>

        {/* About Section */}
        <div className="min-w-[150px] flex flex-col items-center md:items-start">
          <h3 className="font-bold text-lg mb-2">About</h3>
          <a href="/sponsor" className="my-2 hover:text-yellow-400">Contact no- 9616725062</a>
          <a href="/about" className="my-2 hover:text-green-400">Learn About Me</a>
          <a href="mailto:syedhasanzaigam50890@gmail.com" className="my-2 hover:text-gray-400">syedhasanzaigam50890@gmail.com</a>
        </div>
      </div>
      
      <div className="mt-6 text-sm text-center">
        &copy; Hasan Zaigam 2025 Inc. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
