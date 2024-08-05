
import { useEffect, useState } from 'react';
import styles from './service_1.module.css'
import gif from './Image/01.gif'
import Image from 'next/image';


const pages = [
    { id: 1, text: "We are Specialized in DESIGN", backgroundColor: "#374D67" },
    { id: 2, text: "We are Specialized in CODE", backgroundColor: "red" },
    { id: 3, text: "We are Specialized in UX/UI", backgroundColor: "#5C6B85" },
    { id: 4, text: "We are Specialized in DEV", backgroundColor: "#6E7C94" },
    { id: 5, text: "We are Specialized in PRODUCT", backgroundColor: "#809DA3" },
    { id: 6, text: "We are Specialized in SERVICE", backgroundColor: "#92AEB2" },
    { id: 6, text: "We are Specialized in SERVICE", backgroundColor: "#92AEB2" },
  ];

const Service_1 = () => {
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        if (currentPage === 7) {
            setCurrentPage((prevPage) => (prevPage - 6) );
        }
        else{
      const interval = setInterval(() => {
        
            setCurrentPage((prevPage) => (prevPage + 1));
        
      }, 5000);
    
  
      return () => clearInterval(interval);
    }
    }, [currentPage]);

  
return (
    
    <>
       <div className={styles.mainContainer}>
         <div className={styles.container}>

{pages.map((page, index) => (
            <div
              key={page.id}
              className={`${styles.page} ${currentPage === index ? styles.active : ''}`}
              style={{
                backgroundColor: page.backgroundColor,
                transform: `translateY(${(index - currentPage) * 100}%)`,
              }}
            >
               <div className={styles.left_cnt}>
                raghu
               </div>
               <div className={styles.right_cnt}></div>

            </div>
          ))}
        </div>
       </div>
    </>
         
    )
  }

export default Service_1
