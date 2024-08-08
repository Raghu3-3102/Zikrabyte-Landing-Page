import React from "react";
import styles from './Work.module.css'
import { OurWork } from "../OurWork/OurWork";


const Work = () => {
  return (
    <div className={styles.Box}>
      <div className={styles.container}>
        <OurWork />
        <div className={styles.crmManagement}>
          <div className={styles.crmbox}>
            <h3>CRM management</h3>
            <div className={styles.buttons}>
              <p>BUSINESS MANAGEMENT</p>
              <p>SAAS</p>
              <p>CLOUD PLATFORM</p>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.detail}>
              <h4>UX/UI redesign</h4>
              <p>We done a redesign of the product, applying robust UX design methodologies.</p>
            </div>
            <div className={styles.detail}>
              <h4>Initial CSAT</h4>
              <div className={styles.bignum}>
                <h1>2.9</h1>
                <p> of 5</p>
              </div>
            </div>
            <div className={styles.detail}>
              <h4>CSAT after redesign</h4>
              <div className={styles.bignum}>
                <h1>4.8</h1>
                <p> of 5</p>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={styles.twoimages}>
        <div>
        <div><img src="/Images/selligo.svg" alt="" /></div>
          <div className={styles.textbox}>
            <div className={styles.project}>
              <h3>Selligo</h3>
              <div className={styles.buttons}>
                <p>MOBILE CELL</p>
                <p>B2C</p>
                <p>WEB APP</p>
                <p>MOBILE</p>
              </div>
            </div>
            <div className={styles.projects}>
              <h1>X4</h1>
              <p>purchases rate in
                first 2 months after
                design.</p>
            </div>
          </div>
        </div>
        <div>
        <div><img src="/Images/we.svg" alt="" /></div>
          <div className={styles.textbox}>
            <div className={styles.project}>
              <h3>We see shop</h3>
              <div className={styles.buttons}>
                <p>MOBILE CELL</p>
                <p>B2C</p>
                <p>WEB APP</p>
                <p>MOBILE</p>
              </div>
            </div>
            <div className={styles.projects}>
              <p>purchases rate in
                first 2 months after
                design.</p>
            </div>
          </div>
        </div>
        </div>
      </div>

  );
};

export default Work;