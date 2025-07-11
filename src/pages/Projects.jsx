import React from 'react';
import One from '../assets/one.png';
import Two from '../assets/two.png';
import Three from '../assets/three.png';
import Four from '../assets/four.png';
import Five from '../assets/five.png';
import Six from '../assets/six.png';
import ContactImg from '../assets/contactImg.png';

const Projects = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 py-10">
      <div className="text-left mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Installation and Service</h1>
        <p className="text-gray-600 text-lg">How we work.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <img src={One} alt="Request your free code" className="w-full h-auto object-contain" />
        <img src={Two} alt="Site Inspection" className="w-full h-auto object-contain" />
        <img src={Three} alt="Personalized Design System" className="w-full h-auto object-contain" />
        <img src={Four} alt="Calendar / Schedule" className="w-full h-auto object-contain" />
        <img src={Five} alt="Professional Installation" className="w-full h-auto object-contain" />
        <img src={Six} alt="System and Commissioning" className="w-full h-auto object-contain" />
      </div>

      {/* Contact Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
        {/* Image Block */}
        <div className="flex-1">
          <img
            src={ContactImg}
            alt="Contact our friendly team"
            className="w-full max-w-lg mx-auto object-contain"
          />
        </div>

        {/* Text Block */}
        <div className="flex-1 text-left space-y-4">
          <div>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">Do you have questions?</p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">Contact our friendly team</p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">today</p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600 text-lg">Contact our friend team today.</p>
            <button className="bg-yellow-400 text-white font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
