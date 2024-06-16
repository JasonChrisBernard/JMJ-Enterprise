import React, { useState } from 'react';
import styles from "./header.module.css";
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    const closeNav = () => {
        setIsNavOpen(false);
    }

    const handleRefresh = (e) => {
        e.preventDefault();
        window.location.href = '/';
        
      };
    return (
        <header className={`${styles.header} fixed w-full top-0 left-0`} id='header'>
            <nav className={`${styles.nav} ${styles.container}`}>
                <Link to="/" className={`${styles.nav_logo} cursor-pointer gap-x-1`} style={{ fontFamily: 'AelitaFont', fontWeight: 'bold' }} onClick={handleRefresh}>
                    JMJ ENTERPRISE
                </Link>

                <div className={`${styles.nav_icon}`} onClick={handleRefresh} style={{cursor:"pointer"}}>
                    <img src='/images/JMJ_icon.png' alt="JMJ icon" />
                </div>

                {/* Toggle Button */}
                <div className={`${styles.nav_toggle}`} onClick={toggleNav}>
                    <i className="ri-align-justify"></i>
                </div>

                {/* Navigation Menu */}
                <div className={`${styles.nav_menu} ${isNavOpen ? styles.open : ''}`}>
                    <ul className={`${styles.nav_list}`}>
                        <li className="nav-item"><a href="/" className={styles.nav_link}>Home</a></li>
                        <li className="nav-item"><a href="/#about" className={styles.nav_link}>About Us</a></li>
                        <li className="nav-item"><a href="/#products" className={styles.nav_link}>Products</a></li>
                        <li className="nav-item"><a href="/#contactUs" className={styles.nav_link}>Contact Us</a></li>
                    </ul>

                    {/* Close button */}
                    <div className={`${styles.nav_close} absolute top-4`} id='nav-close' onClick={closeNav}>
                        <i className="ri-close-line"></i>
                    </div>
                </div>
            </nav>
        </header>
    );
}
