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
          <a href="https://github.com/HasanZaigam" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-gray-400">
            <RxGithubLogo className="mr-2" /> GitHub
          </a>
          <a href="https://x.com/HasanZaigam" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-400">
            <RxTwitterLogo className="mr-2" /> Twitter
          </a>
          <a href="https://www.linkedin.com/in/hasan-zaigam" target="_blank" rel="noopener noreferrer" className="flex items-center my-2 hover:text-blue-600">
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
