import React from 'react';
import { Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#fafafa] py-6 px-4 md:px-20 mt-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Motto */}
        <div>
          <span className="text-sm bg-[#f7f5f3] text-[#5c3b1e] px-2 py-1 rounded">
            Our motto Empowering tomorrow , today
          </span>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm text-gray-800 font-medium">
          <span>Wiibi Limited</span>
          <span className="text-gray-400">•</span>
          <span>Packages &amp; Pricing</span>
          <span className="text-gray-400">•</span>
          <span>Installation and Service</span>
          <span className="text-gray-400">•</span>
          <span>FAQs</span>
          <span>Contact Us</span>
          {/* Icons */}
          <a href="#" className="ml-2 text-black hover:opacity-70">
            <Instagram className="w-5 h-5 inline" />
          </a>
          <a href="#" className="ml-1 text-black hover:opacity-70">
            <Linkedin className="w-5 h-5 inline" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
