import React,{useState,useEffect} from "react";
import styles from './process.module.css';


export const Product = () => {
    const [isImage1Active, setIsImage1Active] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsImage1Active(prev => !prev);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>

            <div className={styles.table}>
                <div className={styles.row}>
                    <div className={styles.imageCell}>
                        <p>OUR PROCESS</p>
                        <div className={styles.imageWrapper}>
                            <img
                                src="/Images/first-image.png"
                                alt="Web Development"
                                className={`${styles.image} ${isImage1Active ? styles.active : styles.hidden}`}
                            />
                            <img
                                src="/Images/second-image.png"
                                alt="New Development"
                                className={`${styles.image} ${isImage1Active ? styles.hidden : styles.active}`}
                            />
                        </div>
                    </div>
                    <div className={styles.textCell}>
                        <h1>We Design Good websites which boosts our clients business.</h1>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Product;
