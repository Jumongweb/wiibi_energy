import React, { useRef, useState, useEffect } from 'react';
import Rectangle from '../assets/Rectangle 14.png';
import CoreValueImg from '../assets/coreValueImg.png';
import MarkActive from '../assets/mark-active.svg';
import Phone from '../assets/phone.svg';
import Address from '../assets/address.svg';

const packages = [
  {
    title: "Solar + Lithium Packages",
    delivers: "High-efficiency panels paired with long-life Li-ion batteries for maximum uptime.",
    clients: "Homes, SMEs, tech hubs",
  },
  {
    title: "Solar + Tubular Backup",
    delivers: "Swap old inverters for hybrid units with app-based monitoring.",
    clients: "Small offices, clinics, households",
  },
  {
    title: "Smart Inverter Retrofits",
    delivers: "Complete off-grid or hybrid solar solutions tailored to your energy needs.",
    clients: "Homes, SMEs, tech hubs",
  },
  {
    title: "Energy Monitoring & IoT Integration",
    delivers: "High-efficiency panels paired with long-life Li-ion batteries for maximum uptime.",
    clients: "Smart-home enthusiasts, property developers",
  },
];

const About = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const cardWidth = scrollRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="px-6 md:px-20 py-10 mt-24 pt-2">
      {/* About */}
      <div className="max-w-xl">
        <h2 className="text-4xl font-bold text-gray-900">About Us</h2>
        <p className="mt-4 text-gray-700 text-lg font-medium">Who we are.</p>
        <p className="mt-6 text-gray-600 leading-relaxed">
          Wiibi Energy is a full‑service solar‑technology company headquartered at <strong>1 Olaoluwa Street, Off Adebowale Road, Ojodu, Lagos</strong>.
          <br />
          From rooftop panels to whole‑home backup, we design, install, and maintain turn-key energy systems that keep you powered 24/7.
          No generators, just pure sunshine and smart engineering.
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="flex flex-col md:flex-row gap-6 mt-10">
        <div className="border border-yellow-400 rounded-xl p-6 shadow-sm bg-white flex-1">
          <img src={Rectangle} alt="Our Mission" />
          <h2 className="mt-4 font-bold text-3xl mb-3 text-gray-900">Our Mission</h2>
          <p className="text-gray-700">
            To accelerate Nigeria’s transition to sustainable energy by delivering high‑performance solar and
            inverter solutions backed by exceptional service and smart‑home innovation.
          </p>
        </div>

        <div className="border border-yellow-400 rounded-xl p-6 shadow-sm bg-white flex-1">
          <img src={Rectangle} alt="Our Vision" />
          <h2 className="mt-4 font-bold text-3xl mb-3 text-gray-900">Our Vision</h2>
          <p className="text-gray-700">
            A future where every African household and business enjoys affordable, uninterrupted, and eco‑friendly electricity.
          </p>
        </div>
      </div>

      {/* What We Do */}
      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">What we do.</h3>

        {/* Mobile swipeable cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory md:hidden"
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {packages.map((item, i) => (
            <div
              key={i}
              className="min-w-[90%] bg-[#f8f8f8] p-4 rounded-xl border-t-4 border-yellow-400 snap-start shrink-0"
            >
              <p className="font-bold mb-8">{item.title}</p>
              <div>
                <p className="font-medium text-gray-800">What it delivers</p>
                <p className="text-sm text-gray-600 mt-1">{item.delivers}</p>
              </div>
              <div className="mt-8">
                <p className="font-medium text-gray-800">Typical Clients</p>
                <p className="text-sm text-gray-600 mt-1">{item.clients}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile indicators */}
        <div className="flex justify-center mt-4 md:hidden">
          {packages.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 mx-1 rounded-full ${i === activeIndex ? 'bg-yellow-400' : 'bg-gray-300'}`}
            ></div>
          ))}
        </div>

        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((item, i) => (
            <div
              key={i}
              className="bg-[#f8f8f8] p-4 rounded-xl border-t-4 border-yellow-400"
            >
              <p className="font-bold mb-8">{item.title}</p>
              <div>
                <p className="font-medium text-gray-800">What it delivers</p>
                <p className="text-sm text-gray-600 mt-1">{item.delivers}</p>
              </div>
              <div className="mt-8">
                <p className="font-medium text-gray-800">Typical Clients</p>
                <p className="text-sm text-gray-600 mt-1">{item.clients}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="mt-12 flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2 order-1 md:order-2">
          <img src={CoreValueImg} alt="Core Value" className="w-full h-auto rounded-lg" />
        </div>

        <div className="w-full md:w-1/2 order-2 md:order-1">
          <h2 className="font-bold text-2xl text-gray-900 mb-6">Our Core Values</h2>

          {[
            {
              title: 'Innovation',
              description: 'We push boundaries to deliver smarter, more efficient systems.',
            },
            {
              title: 'Integrity',
              description: 'Honest advice, clear contracts, and dependable timelines.',
            },
            {
              title: 'Excellence',
              description: 'We strive to exceed expectations in everything we do.',
            },
            {
              title: 'Customer First',
              description: 'We prioritize our clients’ satisfaction and experience.',
            },
          ].map((value, index) => (
            <div key={index} className="flex items-start gap-3 mb-6">
              <img src={MarkActive} alt="Mark Active" className="mt-1 w-4 h-4" />
              <div>
                <p className="font-bold text-gray-800">{value.title}</p>
                <p className="text-sm text-gray-600 mt-1">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mt-16 text-center px-6 sm:px-10">
        <h2 className="text-4xl font-bold mb-6">Why Choose Us?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <button className="w-full py-4 px-8 border rounded-3xl text-sm sm:text-base">
            Tech-First (GhostHome™, analytics)
          </button>
          <button className="w-full py-4 px-8 border rounded-3xl text-sm sm:text-base">
            Premium Components (Tier-1 hardware)
          </button>
          <button className="w-full py-4 px-8 border rounded-3xl text-sm sm:text-base">
            Transparent Pricing (no generator upsell)
          </button>
          <button className="w-full py-4 px-8 border rounded-3xl text-sm sm:text-base">
            Community Focus (green-tech training)
          </button>
        </div>
      </div>

      {/* Data Driven Insights */}
      <div className="mt-16 mb-8">
        <h2 className="font-bold text-2xl mb-4">Data Driven Insights</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="bg-[#f8f8f8] p-4 rounded-xl flex-1 text-center">
            <p className="text-4xl font-bold text-green-500 mb-2">70%</p>
            <p className="text-green-500 mb-2">reduction</p>
            <p>in generator cost</p>
          </div>
          <div className="bg-[#f8f8f8] p-4 rounded-xl flex-1 text-center">
            <p className="text-4xl font-bold text-green-500 mb-2">2 Million</p>
            <p className="text-green-500 mb-2">Naira</p>
            <p>saved annually</p>
          </div>
          <div className="bg-[#f8f8f8] p-4 rounded-xl flex-1 text-center">
            <p className="text-4xl font-bold text-green-500 mb-2">80%</p>
            <p className="text-green-500 mb-2">cut down</p>
            <p>on Noise Reduction</p>
          </div>
        </div>
      </div>

      {/* Get a Quote */}
      <div className="bg-yellow-500 p-6 md:p-8 rounded-2xl mt-16">
        <div className="">
          <p className="text-2xl md:text-3xl font-bold">Ready to Go Solar?</p>
          <p className="text-2xl md:text-3xl font-bold mt-1">Let us power your world sustainably.</p>
        </div>

        <div className="mt-6">
          <div className="flex items-start gap-3 mb-3">
            <img src={Address} alt="Address" className="w-5 h-5 mt-1" />
            <p>1 Olaoluwa St., Off Adebowale Rd., Ojodu, Lagos</p>
          </div>
          <div className="flex items-start gap-3">
            <img src={Phone} alt="Phone" className="w-5 h-5 mt-1" />
            <p>0916 210 2080</p>
          </div>
        </div>

        <button className="text-white bg-black px-6 py-3 rounded-xl font-bold mt-6">
          Get a Quote
        </button>
      </div>
    </section>
  );
};

export default About;
