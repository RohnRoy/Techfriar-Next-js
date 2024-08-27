import React from 'react';
import Image from 'next/image';
import styles from '../styles/BookingDownloadSection.module.css';

const BookingDownloadSection = () => {
  return (
    <section className={styles.bookingDownloadSection}>
      {/* Container for different Types of PickUp Option and Selecting Vehicle Types */}
      <div className={styles.pickUpOptionContainer}>
        <button className={styles.border0} id="pickUp">Same as Pick-Up</button>
        <button className={styles.border0} id="diffDropOff">Different Drop-Off</button>
        <select className={styles.pointer}>
          <option value="">Select vehicle type</option>
        </select>
      </div>

      {/* Booking type container */}
      <div className={styles.bookingTypeContainer}>
        {/* User Book-Location-Container including the location icon */}
        <div className={styles.userLocationContainer} id="same-as-pickUp">
          <select className={`${styles.bookLocation} ${styles.inputCalenderbox} ${styles.border0}`}>
            <option value="alQuoz">Al Quoz</option>
          </select>
          <Image
            src="/icons/Location-IconCopy.svg"
            width={10}
            height={10}
            alt="userLocation-Icon"
            className={styles.pickupLocationIcon}
          />
        </div>

        {/* Only visible when the user selects a different pick-up location */}
        <div className={`${styles.userLocationContainer} ${styles.dropLocation}`} id="different-pickUp">
          <select className={`${styles.bookLocation} ${styles.inputCalenderbox} ${styles.border0}`}>
            <option value="alQuozx">Al Quoz</option>
          </select>
          <Image
            src="/icons/Location-Icon.svg"
            width={10}
            height={10}
            alt="userLocation-Icon"
            className={styles.pickupLocationIcon}
          />
        </div>

        {/* User Vehicle-pickup-date-input-container */}
        <div className={styles.vehiclePickupDateInputContainer}>
          <input type="datetime-local" className={`${styles.inputCalenderbox} ${styles.border0}`} value="2018-06-12T19:30"/>
          <Image
            src="/icons/calender.svg"
            alt="calender-icon"
            width={1}
            height={1}
            className={styles.calenderIcon}
          />
        </div>

        {/* User Vehicle-end-date-input-container */}
        <div className={styles.vehicleEndDateInputContainer}>
          <input type="datetime-local" className={`${styles.inputCalenderbox} ${styles.border0}`} value="2018-06-12T19:30"/>
          <Image
            src="/icons/calender.svg"
            alt="calender-icon"
            width={1}
            height={1}
            className={styles.calenderIcon}
          />
        </div>

        {/* Search Glass Icon */}
        <Image src="/icons/search-glass.svg" alt="search-glass" 
        width={35}
        height={25}
         className={`${styles.searchGlass} ${styles.pointer}`} />

        <span className={styles.separation}></span>

        <button className={`${styles.searchButton} ${styles.pointer}`}>Quick Book</button>
      </div>

      {/* App Store and Play Store Links Container */}
      <div className={styles.appDownloadSection}>
        <p>Download our App for easy accessibility anytime, anywhere!</p>
        <div className={styles.storeLinksContainer}>
          <a className={styles.appStore} href=""></a>
          <a className={styles.playStore} href=""></a>
        </div>
      </div>
    </section>
  );
};

export default BookingDownloadSection;
