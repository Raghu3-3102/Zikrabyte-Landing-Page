import React, { useState, useEffect, useRef } from 'react';
import styles from './Main.module.css';

const Main = () => {
    const [text, setText] = useState('Main Direction');
    const scrollRef = useRef(null);
  
    const handleScroll = () => {
      const scrollPosition = scrollRef.current.scrollTop;
      console.log('Scroll position:', scrollPosition); 
  
      const viewHeight = window.innerHeight;
      if (scrollPosition < 60 * viewHeight / 100) {
        setText('Main Direction');
      } else if (scrollPosition < 120 * viewHeight / 100) {
        setText('In Love With');
      } else if(scrollPosition > 120 * viewHeight / 100){
        setText('Find About What We Do');
      }
    };
  
    useEffect(() => {
      const scrollElement = scrollRef.current;
      scrollElement.addEventListener('scroll', handleScroll);
  
      return () => {
        scrollElement.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    return (
      <div className={styles.container}>
        <div className={styles.textChanging}>
          <p>{text}</p>
        </div>
        <div ref={scrollRef} className={styles.scrollable}>
          <div className={styles.scrollContent}>
           <div className={styles.stbox}>COMPLEX INTERFACES</div>
           <div className={styles.bigbox}>
            <div className={styles.smbox}>MVP</div>
            <div className={styles.line}></div>
            <div className={styles.smbox}>REDESIGN</div>
           </div>
           <div className={styles.bigbox}>
            <div className={styles.smbox}>WEB/DESKTOP</div>
            <div className={styles.line}></div>
            <div className={styles.smbox}>MOBILE</div>
           </div>
           <div className={styles.bigbox}>NEW TREND UX DESIGNS</div>
           <div className={styles.enbox}>
            <button>Explore our services <img src="/Images/arrow.svg" alt="arrow" /></button>
           </div>
        </div>
        </div>
      </div>
    );
};

export default Main;
