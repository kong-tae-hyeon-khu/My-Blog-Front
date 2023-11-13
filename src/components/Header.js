// Header.jsx

import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Kong's Devlog</h1>
            <nav className={styles.navigation}>
                <a href="/" className={styles.navLink}>메인</a>
                <a href="/signin" className={styles.navLink}>로그인</a>
                <a href="/signup" className={styles.navLink}>회원가입</a>
            </nav>
        </header>
    );
};

export default Header;
