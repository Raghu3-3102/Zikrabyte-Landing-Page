import styles from './footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      {/* <div className={styles.column -1}>  //commented because of error and removed -1 */}
      <div className={styles.column}>
          <h3 className={styles.zik}>Zikrabyte</h3>
          <hr className={styles.hr}/>
        </div>
      <div className={styles.container}>
        <div className={styles.what}>
        <div className={styles.column}>
          <h4 className={styles.h4}>Who We Are</h4>
          <ul>
            <li>About us</li>
            <li>Career</li>
          </ul>
        </div>
        
        <div className={styles.column}>
          <h4 className={styles.h46}>Technology</h4>
          <p className={styles.p5}>We Cover Everything</p>
        </div>
      
        <div className={styles.column}>
          <h4 className={styles.h45}>Quick Links</h4>
          <ul>
            <li>Career</li>
            <li>Contact Us</li>
            <li>Projects</li>
          </ul>
        </div>
        </div>
        <div className={styles.lin}>
          <div className={styles.line}></div>
        <div className={styles.line}></div>
        </div>
        
        <div className={styles.do}> 
        <div className={styles.column}>
          <h4>What we do</h4>
          <ul>
            <li>Web Design & Development</li>
            <li>App Design & Development</li>
            <li>Digital Marketing</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h4>Socials</h4>
          <ul>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>Youtube</li>
          </ul>
        </div>
        </div>
        
      </div>
      <div className={styles.contact}>
        <p>Contact: project@zikrabyte.com</p>
      </div>
      <hr className={styles.hr}/>
    </footer>
  );
};

