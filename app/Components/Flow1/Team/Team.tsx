import Circle from "./Circle";
import Image from "next/image";
import styles from "./team.module.css";
import pen from "../../../../public/assets/images/pencil.gif";

export const Team = () => {
  return (
    <div>
      <div className={styles.team}>
        <h1 className={styles.teamHeading}>
          Our teams are led by bold creative vision and multi-disciplinary
          experience
        </h1>
      </div>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/t1.jpg"
            alt="Image 1"
            width={320}
            height={440}
          />
          <h2 className={styles.th}>Christopher</h2>
          <div className={styles.circle}>View</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/t2.jpg"
            alt="Image 2"
            width={320}
            height={440}
          />
          <h2 className={styles.th}>Jazzmine</h2>
          <div className={styles.circle}>View</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/t3.jpg"
            alt="Image 3"
            width={320}
            height={440}
          />
          <h2 className={styles.th}>Stephine</h2>
          <div className={styles.circle}>View</div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="/assets/images/t4.jpg"
            alt="Image 4"
            width={320}
            height={440}
          />
          <h2 className={styles.th}>William</h2>
          <div className={styles.circle}>View</div>
        </div>
      </div>
      <div className={styles.ani}>
        <h2 className={styles.ch2}>
          Let&apos;s{" "}
          <Image src={pen} alt="pen" width={100} height={100} className="pen" />{" "}
          Talk
        </h2>
      </div>
      <p className={styles.lp1}>
        Share your ideas, and we&apos;ll create engaging designs.
      </p>
      <div className={styles.letsContainer}>
        <div>
          <h2 className={styles.lh1}>Discover us</h2>
          <p className={styles.lp2}>
            We are here to help you; <br />
            Our experts are available to answer any questions you might <br />{" "}
            have. We&apos;ve got the answers.
          </p>
          <h2 className={styles.lh}>Visit us</h2>
          <p className={styles.lp}>
            jayanagar 9th nlovk, bangalore, karnataka.
          </p>
          <p className={styles.lp}>
            Feel free to get in touch with us through our channels:
          </p>
          <h2 className={styles.lh}>email us</h2>
          <p className={styles.lp}>flick@flick.com</p>
          <h2 className={styles.lh}>Call Us</h2>
          <p className={styles.lp}>
            +971-4-576-6770 <br />
            +971-55-983-7007
          </p>
        </div>
        <div>
          <Image
            className={styles.gr}
            src="/assets/images/group.png"
            alt="group"
            width={700}
            height={648.9}
          />
        </div>
      </div>
      <Circle />
    </div>
  );
};
