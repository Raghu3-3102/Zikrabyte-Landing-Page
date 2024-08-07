import React from "react";
import styles from './Design.module.css'

function Design() {
    return (
        <div className={styles.design}>
            <div className={styles.textbox}>
                <span>OUR DESIGN APPROACH</span>
                <h2>Learn. Build.
                    Measure.</h2>
                <div>Every project is unique and demands tailored design
                    strategies. We employ a flexible design approach that
                    adapts successfully to a wide array of project types.</div>
                <div className={styles.btndiv}>
                    <button>Explore our team <img src="/Images/arrow.svg" alt="arrow" /></button>
                    
                </div>
            </div>
            <div className={styles.image}><img src="/Images/lay.svg" alt="lay image" /></div>
        </div>
    )
}

export default Design;