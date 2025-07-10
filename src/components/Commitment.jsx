import React from 'react';
import Rectangle from '../assets/Rectangle 14.png'; // Ensure the path is correct

const commitments = [
  {
    title: 'Reducing Energy Costs',
    description:
      'Our solar power systems help clients reduce their energy expenses by up to 30%, allowing them to reinvest savings into business growth.',
    imgAlt: 'Energy savings graphic',
  },
  {
    title: 'Ensuring Stable Power Supply',
    description:
      'With a 99% uptime, our solar solutions provide reliable electricity, eliminating disruptions caused by power outages.',
    imgAlt: 'Stable power supply graphic',
  },
  {
    title: 'Promoting Environmental Sustainability',
    description:
      'By reducing dependence on polluting diesel generators, we assist clients in cutting their carbon emissions.',
    imgAlt: 'Sustainability graphic',
  },
];

const Commitment = () => {
  return (
    <section className="mt-8 bg-[#fafafa] mx-4 md:mx-20 p-6 rounded-xl">
      <span className="inline-block bg-[#f3f3f3] px-6 py-2 rounded-xl text-sm font-medium text-gray-700">
        Our Commitment
      </span>

      <div className="flex flex-col md:flex-row flex-wrap gap-6 mt-8">
        {commitments.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 md:w-[calc(33.333%-1rem)] w-full shadow-sm"
          >
            <img src={Rectangle} alt={item.imgAlt} className="rounded-md" />
            <p className="text-xl font-semibold mt-4 mb-2">{item.title}</p>
            <p className="text-gray-700 text-sm">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Commitment;
