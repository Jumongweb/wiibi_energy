import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-6 px-4 md:px-20 mt-4">
      <div className="flex flex-col gap-3 md:gap-6">
        {/* Motto on top row for md+ */}
        <div className="text-center md:text-left">
          <span className="text-sm bg-[#f7f5f3] text-[#5c3b1e] px-2 py-1 rounded inline-block">
            Our motto : Empowering tomorrow, today
          </span>
        </div>

        {/* Navigation and icons */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-3 text-gray-800 font-medium">
          <span>Wiibi Limited</span>
          <span className="text-gray-400 hidden md:inline">•</span>
          <span>Packages &amp; Pricing</span>
          <span className="text-gray-400 hidden md:inline">•</span>
          <span>Installation and Service</span>
          <span className="text-gray-400 hidden md:inline">•</span>
          <span>FAQs</span>
          <span className="md:ml-4">Contact Us</span>

          {/* Social Icons */}
          <a href="https://www.instagram.com/" className="ml-2 text-black hover:opacity-70">
            <Instagram className="w-5 h-5 inline" />
          </a>
          <a href="https://www.linkedin.com/" className="ml-1 text-black hover:opacity-70">
            <Linkedin className="w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
