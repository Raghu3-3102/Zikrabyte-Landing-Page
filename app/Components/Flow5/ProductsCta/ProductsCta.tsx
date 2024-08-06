import React from 'react'
import Image from 'next/image'
import ZikraByteLogo from "../../../../public/assets/img/Achievements/ZikraByteLogo.png";

export const ProductsCta = () => {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-black '>
        <div className="flex  flex-col justify-center items-center  max-w-[1024px] text-white p-4">

        <h3 className="text-5xl text-center font-semibold mb-4">
        Ready to Transform Your Digital Presence?
        </h3>
        <p className="text-xl text-center font-base my-5">
        Take the first step towards digital success with DigitX by your side. Our team of experts is eager to craft tailored solutions that drive growth for your business. Whether you need a stunning website, a powerful mobile app, or a data-driven marketing campaign, weve got you covered. Let&apos;s embark on this transformative journey together.       
         </p>
        
        <p className="text-2xl my-2">Unlock Your Digital Potential Today</p>

    <div className="flex flex-row justify-around gap-2 mt-6">
        <button className="bg-orange-500 text-xl text-white px-6 py-2 rounded-full">Get Started</button>
        <button className="bg-transparent text-xl border border-orange-500   text-white px-6 py-6 rounded-full">Free Consultation</button>
    </div>
    <Image className='mt-12' src={ZikraByteLogo} alt="ZikraByte Logp" />
        </div>
    </div>
  )
}
