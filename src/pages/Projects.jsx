import React from 'react';
import ContactImg from '../assets/contactImg.png';
import Stock1 from '../assets/stockImg1.avif';
import Stock2 from '../assets/stockImg2.avif';
import Stock3 from '../assets/stockImg3.avif';
import Stock4 from '../assets/stockImg4.avif';
import Stock5 from '../assets/stock5.webp';
import Stock6 from '../assets/Stock6.webp';
import Stock7 from '../assets/stock7.webp';
import Stock8 from '../assets/stock8.avif';
import Stock9 from '../assets/stock9.avif';
import Stock10 from '../assets/stock10.avif';
import Stock11 from '../assets/stock11.avif';
import Stock12 from '../assets/stock12.avif';
import Stock13 from '../assets/stock13.avif';
import Stock14 from '../assets/stock14.avif';
import Stock15 from '../assets/stock15.avif';
import Stock16 from '../assets/stock16.avif';

const Projects = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-20 py-10 mt-24 pt-2">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p>What we have worked on.</p>
      </div>

      {/* Project 1 */}
      <div className="flex gap-8 flex-col md:flex-row">
        <div>
          <div className="flex gap-4 h-[250px]">
            <div className="flex-1">
              <img src={Stock1} alt="Stock1" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <div className="h-1/2">
                <img src={Stock2} alt="Stock2" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="w-1/2">
                  <img src={Stock3} alt="Stock3" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-1/2">
                  <img src={Stock4} alt="Stock4" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mt-4">Joes Bar & Lounge</p>
            <p>2023</p>
          </div>
        </div>

        <div>
          <div className="flex gap-4 h-[250px]">
            <div className="flex-1">
              <img src={Stock5} alt="Stock5" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <div className="h-1/2">
                <img src={Stock6} alt="Stock6" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="w-1/2">
                  <img src={Stock7} alt="Stock7" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-1/2">
                  <img src={Stock8} alt="Stock8" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mt-4">Admor Links</p>
            <p>2025</p>
          </div>
        </div>
      </div>

      {/* Project 2 */}
      <div className="flex gap-8 flex-col md:flex-row mt-8">
        <div>
          <div className="flex gap-4 h-[250px]">
            <div className="flex-1">
              <img src={Stock13} alt="Stock13" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <div className="h-1/2">
                <img src={Stock14} alt="Stock14" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="w-1/2">
                  <img src={Stock15} alt="Stock15" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-1/2">
                  <img src={Stock16} alt="Stock16" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mt-4">
            Mr. Joseph Residence
            </p>
            <p>2025</p>
          </div>
        </div>

        <div>
          <div className="flex gap-4 h-[250px]">
            <div className="flex-1">
              <img src={Stock9} alt="Stock9" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="flex-1 flex-col gap-2 hidden md:flex">
              <div className="h-1/2">
                <img src={Stock10} alt="Stock10" className="w-full h-full object-cover rounded-xl" />
              </div>
              <div className="flex gap-2 h-1/2">
                <div className="w-1/2">
                  <img src={Stock11} alt="Stock11" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="w-1/2">
                  <img src={Stock12} alt="Stock12" className="w-full h-full object-cover rounded-xl" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="font-bold mt-4">
            Operation feed a thousand family and installation of solar power for business
              empowerment Easter giveaway

            </p>
            <p>2025</p>
          </div>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="flex flex-col md:flex-row items-start gap-8 mt-12">
        <div className="flex-1">
          <img
            src={ContactImg}
            alt="Contact our friendly team"
            className="w-full max-w-lg mx-auto object-contain"
          />
        </div>

        <div className="flex-1 text-left space-y-4">
          <div>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">Do you have questions?</p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">Contact our friendly team</p>
            <p className="text-3xl sm:text-4xl font-bold leading-tight">today</p>
          </div>
          <div className="space-y-3">
            <p className="text-gray-600 text-lg">Contact our friend team today.</p>
            <button className="bg-[#fcb139] text-white font-bold py-3 px-6 rounded-xl hover:bg-yellow-500 transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
