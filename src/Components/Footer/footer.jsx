import styles from './footer.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className={styles.footerContainer}>
      <footer href="#footer" className={styles.footer}>
        {/* Footer Intro */}
        <div className={styles.footerContent}>
          <img src="/images/JMJ_icon-removebg-preview.png" alt='jmj Icon' className={styles.JMJ_icon} />
          <p>Jeewa Plastic (Pvt) Ltd was incorporated with the vision of sourcing the latest & the quality products at competitive pricing to Sri Lankan customers.</p>
        </div>

        {/* Footer Information */}
        <div className={styles.footerContent}>
          <h4>Information</h4>
              <li className="nav-item"><a href="/">Home</a></li>
              <li className="nav-item"><a href="/#about">About Us</a></li>
              <li className="nav-item"><a href="/#products">Products</a></li>
              <li className="nav-item"><a href="/#contactUs">Contact Us</a></li>
        </div>

        {/* Footer Products */}
        <div className={styles.footerContent}>
          <h4>Products</h4>
          <li>
        <Link to="/product-description/product_1" onClick={scrollToTop}>
          Cold Lamination
        </Link>
      </li>
      <li>
        <Link to="/product-description/product_2" onClick={scrollToTop}>
          Fabric Flag Material
        </Link>
      </li>
      <li>
        <Link to="/product-description/product_7" onClick={scrollToTop}>
          One Way Vision Sticker
        </Link>
      </li>
      <li>
        <Link to="/product-description/product_3" onClick={scrollToTop}>
          Flex Banner Sheets
        </Link>
      </li>
        </div>

        {/* Footer Contact Info*/}
        <div className={styles.footerContent}>
          <h4>Contact Info</h4>
          <li><a href="https://www.google.com/maps/place/JMJ+Enterprise/@6.9510331,79.865019,17z/data=!4m6!3m5!1s0x3ae258f261881111:0x4745dfca8ac0c20!8m2!3d6.9510331!4d79.8675939!16s%2Fg%2F11gf3r4b_y?entry=ttu"><i class="ri-map-pin-fill"></i> NO 344, BLOEMENDHAL ROAD,<br/>(K.CYRIL C PERERA MAWATHA) COLOMBO-13,<br/> SRI LANKA.</a></li>
          <li><span><i class="ri-phone-fill"></i> 0777-249546</span></li>
          <li><span><i class="ri-phone-fill"></i> 071-8124482</span></li>
          <li><span><i class="ri-phone-fill"></i> 0777-880244</span></li>
          <li><span><i class="ri-phone-fill"></i> 076-6166363</span></li>
          <li><span><i class="ri-mail-fill"></i> JMJENTERPRISE344@GMAIL.COM</span></li>
        </div>
      </footer>
      
      <section className={styles.footer_bottom}>
        <p>Copyright © 2024 JMJ Enterprise (Pvt) Ltd. All rights reserved. Web designed and developed by Jason Bernard.</p>
        <div className={styles.icons}>
          <a href="https://www.facebook.com/jmjenterprise344"><i class="ri-facebook-circle-fill"></i></a>
          <a href="https://www.instagram.com/explore/locations/334034940633076/jmj-enterprise/"><i class="ri-instagram-fill"></i></a>
        </div>
      </section>
    </div>
  );
}
