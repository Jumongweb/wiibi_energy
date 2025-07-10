import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import ResultSpeak from '../components/ResultSpeak'
import Commitment from '../components/Commitment'
import FaqSection from '../components/FaqSuestion'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='bg-[#f4f4f4]'>
        <Navbar/>
        <HeroSection/>
        <ResultSpeak/>
        <Commitment/>
        <FaqSection/>
        <Footer/>
    </div>
  )
}

export default Home