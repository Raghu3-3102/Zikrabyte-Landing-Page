import styles from './contact.module.css';
import Image from 'next/image';

export const Contact = () => {
  return (
    <div>
    <div className={styles.con}>
      <div>
        <h2 className={styles.ch2}>
          Have a Project! <br />
          Let&apos;s discuss
        </h2>
        <p className={styles.cp2}>
          Thank you for getting in touch!<br />
          Kindly.<br />Fill the form, have a great day!
        </p>
      </div>
      <div>
        <div className={styles.formContainer}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Your Name" className={styles.input} />
              <input type="email" placeholder="Your Email" className={styles.input} />
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Phone Number" className={styles.input} />
              <select className={styles.select}>
                <option>Country</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <input type="text" placeholder="Company Name" className={styles.input} />
              <select className={styles.select}>
                <option>Interested in</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <textarea placeholder="Message" className={styles.textarea}></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
      </div>
    </div>
    <div className={styles.loc}>
        <Image src="/assets/images/f1.png" width={80} height={80}/>
    </div>
    </div>
  );
};

