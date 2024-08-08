'use client'
import React from 'react'
import style from './About.module.css'
import Image from 'next/image'
import { Insta, Twitter, Linkedin } from './Images'
const BtnDiv = () => {
  return (<>
  <div className={style.buttonDiv}>
    <button className={style.socialBtns}><Image src={Insta} alt='insta Button'/></button>
    <button className={style.socialBtns}><Image src={Twitter} alt='Twitter Button'/></button>
    <button className={style.socialBtns}><Image src={Linkedin} alt='Linkedin Button'/></button>
  </div>
  </>
  )
}

export default BtnDiv