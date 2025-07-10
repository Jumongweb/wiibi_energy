import React from 'react';
import ArrowRight from '../assets/arrowRight.svg';

const metrics = [
  { value: '7', label: 'States Covered' },
  { value: '25 homes', label: 'Upgraded to solar' },
  { value: '99.9%', label: 'Average Uptime' },
  { value: '15 MWp', label: 'Installed' },
  { value: '6,200 tons', label: 'Co₂ saved' },
  { value: '3-5 years', label: 'Payback' },
];

const ResultSpeak = () => {
  return (
    <section className="bg-[#fafafa] mx-4 md:mx-20 mt-10 p-6 rounded-xl">
      <div>
        <span className="bg-[#f3f3f3] inline-block px-4 py-2 rounded text-sm font-medium text-gray-600">
          Our Results Speak for Us
        </span>
      </div>

      <h2 className="text-2xl font-bold mt-4 mb-6">So far so Good...</h2>

      <div className="grid grid-cols-2 gap-4">
        {metrics.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-sm flex flex-col justify-center"
          >
            <span className="text-2xl font-bold text-yellow-400">{item.value}</span>
            <p className="text-sm text-gray-700 mt-1">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-4 p-4 mt-8">
        <div className="flex items-center gap-2">
          <span className="font-bold text-sm md:text-base">
            Join our list of happy clients
          </span>
          <img src={ArrowRight} alt="Arrow Right Icon" className="w-5 h-5" />
        </div>

        <button className="font-bold bg-yellow-400 text-white px-6 py-2 rounded text-sm md:text-base">
          Get A Quote
        </button>
      </div>
    </section>
  );
};

export default ResultSpeak;
