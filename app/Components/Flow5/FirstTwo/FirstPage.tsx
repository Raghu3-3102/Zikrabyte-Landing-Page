import React from 'react'
import Image from 'next/image'
import AboutEmoji from '../../../../public/assets/img/AboutEmoji.gif'
import style from './About.module.css'

const FirstPage = () => {
  return (
    <>
    <div className={style.firstPageWrapper}>
        <div className={style.textBox}>
            <div className={style.firstHeadline}>
              <h1 className={`${style.topRow} `}>Elevating  Brands</h1>
              <h1 className={`${style.bottomRow}`}>in the Digital Age</h1>
            </div>
          <p className={style.topPara}>Welcome to DigitX, your trusted partner in the dynamic world of digital solutions. We are a passionate team of creative minds, tech enthusiasts, and digital strategists, dedicated to empowering businesses and individuals in the digital realm. Our mission is to deliver exceptional results that drive success, create meaningful connections, and bring your digital vision to life.</p>
        </div>
        <div className={style.animBox}>
      <Image src={AboutEmoji} alt='emoji animation' unoptimized={true} className={style.animationResizer}/>
        </div>
    </div>
    </>
  )
}

export default FirstPage