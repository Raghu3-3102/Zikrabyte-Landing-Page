'use client';
import React from 'react';
import styles from './products.module.css';
import Product from './Process/Process';
import UX from './UX-design/UX'
import UI from './UI-design/UI'
import Testing from './Testing/Testing'
import Work from './Work/Work'
import Design from './Design/Design'
import Main from './MainDir/Main'

export const Products = () => {
  return (
    <div className={styles.ourWork_section}>
        <div className={styles.heading_cnt}>
            <Product />
            <UX />
            <div className={styles.linesdiv}>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            </div>
            <UI />
            <div className={styles.linesdiv}>
            <div className={styles.lines}></div>
            <div className={styles.lines}></div>
            </div>
            <Testing />
            <Work />
            <Design />
            <Main />
        </div>
    </div>
  )
}

export default Products;