import React,{useEffect} from "react";
import styles from './UI.module.css'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const UI = () => {
    useEffect(() => {
      AOS.init({
        duration: 1200,
        offset: 200,
        once: true,
        mirror: false,
      });
    }, []);
  
    return (
      <div className={styles.container}>
        <div className={styles.ux}>
          <h1 className={styles.hux}>UI DESIGN</h1>
          <div className={styles.boxes}>
            <p data-aos="fade-right" data-aos-delay="300">QA SESSIONS</p>
            <p data-aos="fade-right" data-aos-delay="200">INITIAL DATA REVIEW</p>
            <p data-aos="fade-right" data-aos-delay="100">CURRENT STATE ASSESSMENT</p>
            <p data-aos="fade-right" data-aos-delay="300">USER INTERVIEW</p>
            <p data-aos="fade-right" data-aos-delay="100">CONTEXTUAL INTERVIEW</p>
            <p data-aos="fade-right" data-aos-delay="300">QUANTITATIVE RESEARCH</p>
            <p data-aos="fade-right" data-aos-delay="100">COMPETITORS RESEARCH</p>
            <p data-aos="fade-right" data-aos-delay="300">DESK RESEARCH</p>
            <p data-aos="fade-right" data-aos-delay="300">HMW</p>
            <p data-aos="fade-right" data-aos-delay="200">AFFINITY WALLS</p>
            <p data-aos="fade-right" data-aos-delay="100">USER PERSONAS</p>
            <p data-aos="fade-right" data-aos-delay="300">EMPATHY MAP</p>
            <p data-aos="fade-right" data-aos-delay="300">CJM</p>
            <p data-aos="fade-right" data-aos-delay="200">JTBD</p>
            <p data-aos="fade-right" data-aos-delay="200">USE CASES</p>
            <p data-aos="fade-right" data-aos-delay="100">STORY MAPPING</p>
            <p data-aos="fade-right" data-aos-delay="300">USER FLOWS</p>
            <p data-aos="fade-right" data-aos-delay="200">INFORMATION ARCHITECTURE</p>
            <p data-aos="fade-right" data-aos-delay="300">IDEAS CONCEPTUAL MAP</p>
          </div>
        </div>
        
        <div className={styles.right}>
          <div className={styles.di1}>
              <div className={styles.di2}>
                  <img src='/Images/layout.svg' alt='eye' />
                  <h1 className={styles.dh1}> Implementation</h1>
              </div>
              <p className={styles.p1}>At this stage, we bring the design to life by creating the visual
                  components of the interface. Building on the established UX
                  principles, we ensure the interface is not only user-friendly but
                  also boasts a contemporary and aesthetically pleasing UI.</p>
          </div>
          <div className={styles.di1}>
              <div className={styles.di2}>
                  <img src='/Images/validation.svg' alt='magnifier glass' />
                  <h1 className={styles.dh1}> Validation</h1>
              </div>
              <p className={styles.p1}>We recommend to our clients the inclusion of validation and
                  user testing services. This approach strengthens the usability of
                  the product and enhances its competitiveness in the market.</p>
          </div>
          
        </div>
  
      </div>
    );
  };

  export default UI;