import React from 'react'
import HeroSection from '../components/HeroSection'
import ResultSpeak from '../components/ResultSpeak'
import Commitment from '../components/Commitment'
import FaqSection from '../components/FaqSuestion'

const Home = () => {
  return (
    <div className='bg-[#f4f4f4] mt-24 pt-2 pb-8'>
        <HeroSection/>
        <ResultSpeak/>
        <Commitment/>
        <FaqSection/>
    </div>
  )
}

export default Home