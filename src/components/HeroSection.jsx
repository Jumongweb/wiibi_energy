import SolarPower from '../assets/solarPower.png';

const HeroSection = () => {
  return (
    <section className='flex flex-col lg:flex-row mt-4 lg:mt-8 mb-4 lg:mb-8 bg-[#fafafa] rounded-lg mx-4 lg:mx-20 p-4 lg:p-6 items-center'>
      <div className='w-full lg:w-1/2 px-4 lg:px-20 py-4 lg:py-4'>
        <div>
          <span className='bg-[#f4f4f4] p-2 rounded mb-8 inline-block'>Energy Saving Solutions</span>
          <img src={SolarPower} alt="Solar power" className='mt-4 mb-4 w-full max-w-md' />
        </div>
        <p className='mt-8 mb-8 text-sm lg:text-base'>
          Reliable, affordable, and sustainable solar solutions for homes and businesses.
        </p>
        <div className='mt-8'>
          <div className='mb-4'>
            <input 
              placeholder='Your Email' 
              className='w-full h-10 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent'
            />
          </div>
          <button className='bg-yellow-400 text-white px-8 py-2 rounded font-bold w-full hover:bg-yellow-500 transition-colors'>
            Download Our free solar Guide
          </button>
        </div>
      </div>
      
      <div className='w-full lg:w-1/2 mt-6 lg:mt-0 flex justify-center'>
        <div className='w-full max-w-md lg:max-w-lg aspect-video'>
          <iframe
            className='w-full h-full rounded-lg'
            src="https://www.youtube.com/embed/DIkCQ1NU1E0?autoplay=1&mute=1"
            title="Wiibi Solar Video"
            frameBorder="0"
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
