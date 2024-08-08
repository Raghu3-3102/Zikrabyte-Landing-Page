import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './UX.module.css'





export const UX = () => {
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
          <h1 className={styles.hux}>UX DESIGN</h1>
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
                  <img src='/Images/eye.svg' alt='eye' />
                  <h3 className={styles.dh1}> Discovery</h3>
              </div>
              <p className={styles.p1}>This stage enables us to gain an initial understanding of the project and business objectives.
                 It involves reviewing initial data, conducting stakeholder interview.</p>
          </div>
          <div className={styles.di1}>
              <div className={styles.di2}>
                  <img src='/Images/search.svg' alt='magnifier glass' />
                  <h3 className={styles.dh1}> Research</h3>
              </div>
              <p className={styles.p1}>This stage helps to get insights into the product, conducting
                  market research, analyzing the competitors, identifying users'
                  pain points, and determining the analysis plan.</p>
          </div>
          <div className={styles.di1}>
              <div className={styles.di2}>
                  <img src='/Images/dataflow.svg' alt='server' />
                  <h3 className={styles.dh1}> Analysis</h3>
              </div>
              <p className={styles.p1}>This step involves applying design thinking to structure the
                  project. It's akin to piecing together a puzzle, transforming
                  unclear assumptions into a cohesive and comprehensive picture.</p>
          </div>  
        </div>
      </div>
    );
  };

  export default UX;