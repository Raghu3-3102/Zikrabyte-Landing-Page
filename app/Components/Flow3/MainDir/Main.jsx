import React, { useState, useEffect, useRef } from 'react';
import styles from './Main.module.css';


const Main = () => {
  const [text, setText] = useState('Main Direction');
  const [fade, setFade] = useState(false);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    const scrollPosition = scrollRef.current.scrollTop;
    const viewHeight = window.innerHeight;

    let newText = '';
    if (scrollPosition < 0.6 * viewHeight) {
      newText = 'Main Direction';
    } else if (scrollPosition < 1.2 * viewHeight) {
      newText = 'In Love With';
    } else {
      newText = 'Find About What We Do';
    }

    if (newText !== text) {
      setFade(true); // Trigger fade out
      setTimeout(() => {
        setText(newText); // Update text
        setFade(false); // Trigger fade in
      }, 300); // Duration of fade-out animation
    }
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    scrollElement.addEventListener('scroll', handleScroll);

    return () => {
      scrollElement.removeEventListener('scroll', handleScroll);
    };
  }, [text]);

  return (
    <div className={styles.container}>
      <div className={`${styles.textChanging} ${fade ? styles.fadeOut : styles.fadeIn}`}>
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
