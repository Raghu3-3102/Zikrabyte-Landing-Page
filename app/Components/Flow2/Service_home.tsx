import { useEffect, useState } from 'react';
import styles from './Service_home.module.css'

import Image from 'next/image';

import gif1 from './Image/01.gif'
import gif2 from './Image/02.gif'
import gif3 from './Image/03.gif'
import gif4 from './Image/04.gif'
import gif5 from './Image/05.gif'
import gif6 from './Image/06.gif'


function Service_home() {


  const [currentIndex, setCurrentIndex] = useState(0);
  const [reset, setReset] = useState(false);

  

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < 4) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      } else {
        setTimeout(() => {
          // setReset(true);
          setTimeout(() => {
            setCurrentIndex(0);
            // setReset(false);
          }, 1000);
        }, 3000); // Keep backgrounds at the top for 4 seconds before resetting
      }
    }, 4800);
    return () => clearInterval(interval);
  }, [currentIndex]);





  // images
  const images = [gif1, gif2, gif3,gif4,gif5,gif6];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 4 seconds (3s visible + 1s transition)

    return () => clearInterval(interval);
  }, []);




  // text




  const texts = [
    'DESIGN ?',
    'DEVLOPE ?',
    'CONTENT ?',
    'DIGITAL MARKETIG',
    'SEO',
    ""
    // Add more texts as needed
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // Change text every 5 seconds to allow 3s for stay and 2s for transitions

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <div className={`${styles.backgrounds} ${reset ? styles.reset : ''}`}>
        <div className={`${styles.background} ${currentIndex >= 0 && !reset ? styles.active : ''}`} style={{ backgroundColor: '#003366'}}></div>
        <div className={`${styles.background} ${currentIndex >= 1 && !reset ? styles.active : ''}`} style={{ backgroundColor: 'rgb(230, 225, 225)' }}></div>
        <div className={`${styles.background} ${currentIndex >= 2 && !reset ? styles.active : ''}`} style={{ backgroundColor: 'white',  borderTop:"10px solid blue"}}></div>
        <div className={`${styles.background} ${currentIndex >= 3 && !reset ? styles.active : ''}`} style={{ backgroundColor: 'rgb(72, 151, 241)' }}></div>
        <div className={`${styles.background} ${currentIndex >= 4 && !reset ? styles.active : ''}`} style={{ backgroundColor: 'rgba(189, 93, 249, 0.833)' }}></div>
     
      </div>
      <div className={styles.content}>
        
         
        <div className={styles.left_cnt}>
          
        {currentImageIndex === 5 ? <>
          <div className={styles.write_up_2}>WE GOT YOU !</div>
         </> : 
         <> <div className={styles.write_up}>We Are</div>
         <div className={styles.write_up}>Specilized in.</div></>}
          

         <div className={styles.changrd_write_up}>
          {texts.map((text, index) => (
        <div
          key={index}
          className={`${styles.text} ${index === currentTextIndex ? styles.visible1 : styles.hidden}`}
        >
          {text}
        </div>
      ))}
          </div>


        </div>
        <div className={styles.right_cnt}>
        <div className={styles.imageContainer}>
        {images.map((img, index) => (
          <div
            key={index}
            className={`${styles.image} ${index === currentImageIndex ? styles.visible : styles.hidden}`}
          >
            <Image src={img} alt={`Image ${index + 1}`} layout="fill" objectFit="contain" />
          </div>
        ))}
      </div>
        </div>
    

      </div>
    </div>
  )
}

export default Service_home
