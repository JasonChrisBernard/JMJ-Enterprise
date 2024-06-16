import React, { useEffect, useState } from 'react';
import styles from './HomePage.module.css';
import { AboutUs } from '../AboutUsSection/AboutUs';
import { Products } from '../Products/Products';
import { ContactUs } from '../ContactUsSection/ContactUs';
import {Splash} from "../SplashSection/Splash";

export const HomePage = () => {
  const [currentSection, setCurrentSection] = useState(null);

  useEffect(() => {
    const handleScrollToSection = () => {
      const path = window.location.hash.substring(1);
      setCurrentSection(path === '' || path === '/' ? null : path); // Set currentSection to null if hash is empty or '/'
      const targetSection = document.getElementById(path);
      if (targetSection) {
        setTimeout(() => {
          const sectionOffset = 100;
          const offsetTop = targetSection.offsetTop - sectionOffset;
          window.scrollTo({ top: offsetTop, behavior: 'smooth' });
        }, 10); // Delay the calculation by 100 milliseconds
      }
    };

    handleScrollToSection(); // Scroll to section on initial load

    window.addEventListener('hashchange', handleScrollToSection);

    return () => {
      window.removeEventListener('hashchange', handleScrollToSection);
    };
  }, []);

  useEffect(() => {
    const targetSection = document.getElementById(currentSection);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSection]);

  return (
    <div className={styles.homeSections}>

      {/* Background */}
      <section id='/'>
       <Splash/>
      </section>

      <section id='about'>
        <AboutUs />
      </section>

      <section id='products'>
        <Products/>
      </section >

      <section id='contactUs'>
      <ContactUs />
      </section>

    </div>
  );
};
