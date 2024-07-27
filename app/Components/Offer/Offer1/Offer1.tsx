import React from 'react'
import './Offer1.css'

export const Offer1 = () => {
  return (
    <div className='offer1_section p-10'>
        <div className="offer1_text">
            <h2 className='text-4xl font-semibold'>What We Offer</h2>
            <p className='w-1/2 text-xl mt-5' >
            We are a based web design team. Combining high-end design with strategic
            SEO to elevate brands and increase website traffic. We&apos;ll use the same methods
            that helped you find our site, to bring people to yours.
            </p>
        </div>
        <div className="offer1_img_cnt mt-10">
            <img src="assets\img\offer1.png" alt="" />
        </div>
    </div>
  )
}
