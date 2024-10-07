import React from 'react'
import Footer from './Footer'


const Contacts = () => {
  return ( 
    <div>
      <div className='contacts-container flex flex-col mx-auto w-[70%] justify-center items-center content-center gap-[20px] p-10 mb-[27rem]'>
        <h1 className='text-5xl font-bold'>Contacts</h1>
        <p>Share your feedback and queries at <em>support@yutreat.com</em></p>
      </div>
      <Footer/>
    </div>
  )
}

export default Contacts