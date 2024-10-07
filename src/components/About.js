import React from 'react'
import Footer from './Footer'

const About = () => {
  return (
    <div>
      <div className='about-container flex flex-col mx-auto w-[70%] justify-center items-center content-center gap-[20px] p-10 mb-28'> 
        <h1 className='about-h1 text-7xl font-bold'>ABOUT US</h1>
        <div >
          <p className='about-p text-[22px] text-center pb-5'><em>Our mission is to elevate the quality of life for the urban consumer with unparalleled convenience. Convenience is what makes us tick. It's what makes us get out of bed and say, "Let's do this."</em></p>
          
        </div>
        <div className='menu-card-line h-[0.1px] bg-slate-400 w-full'></div>
        <h3 className='text-3xl font-bold pt-5'>What’s in store for the future?</h3>
        <p className='text-lg text-center'>
        YuTreat has grand plans to be India’s most loved hyperlocal player. It aims to be the most accessible platform 
        on the network - reimagining the meaning of convenience in the country through a variety of service offerings.</p>
      </div>
      <Footer/>
    </div>
  )
}

export default About