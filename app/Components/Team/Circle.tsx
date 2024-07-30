'use client';
import { useEffect } from 'react';
import styles from './team.module.css'

const Circle = () => {
  useEffect(() => {
    const containers = document.querySelectorAll(`.${styles.imageContainer}`);

    containers.forEach(container => {
      const circle : any = container.querySelector(`.${styles.circle}`);

      const handleMouseMove = (e: any) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        circle.style.left = `${x}px`;
        circle.style.top = `${y}px`;
        circle.style.opacity = 1;
      };

      const handleMouseLeave = () => {
        circle.style.opacity = 0;
      };

      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return null;
};

export default Circle;
