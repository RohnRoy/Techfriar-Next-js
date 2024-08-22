import React from 'react';
import styles from '../styles/Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.bannerContainer} id="bannerContainer">
      <div className={styles.offerDetailsContainer}>
        <p>Receive guaranteed <br /> on a monthly hire or lease</p>
        <button className={styles.border0}>GIFT VOUCHER</button>
      </div>
      <div className={styles.carouselNavigator}>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
        <div className={styles.circle}></div>
      </div>
    </section>
  );
};

export default Banner;
