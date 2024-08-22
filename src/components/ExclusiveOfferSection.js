// components/ExclusiveOfferSection.js
import Image from 'next/image';
import styles from '../styles/ExclusiveOfferSection.module.css';

export default function ExclusiveOfferSection() {
  return (
    <section className={styles.exclusiveOfferSection}>
      {/* Container for the subscription content */}
      <div className={styles.subscriptionContent}>
        <h2 className={styles.subscriptionHeading}>Subscribe here for exclusive offers and updates!</h2>
        <form className={styles.userInfoContainer} id="subscribe-newLetter">
          <div className={styles.userInputBoxes}>
            <input type="text" placeholder="Name" name="name" className={styles.border0} />
            <input type="text" placeholder="Email" name="email" className={styles.border0} />
          </div>
          <div className={styles.errorMessage}>
            <p id="invalidNameMessage"></p>
            <p id="invalidEmailMessage"></p>
          </div>
          <p className={styles.subscriptionDescription}>
            Don't miss out! Enter your email and your name, then hit subscribe to unlock a world of special offers and details.
          </p>
          <button className={`${styles.subscriptionButton} ${styles.border0} ${styles.pointer}`}>
            Subscribe
          </button>
        </form>
      </div>

      {/* Container for the app download content */}
      <div className={styles.appDownloadContent}>
        <Image
          src="/images/Rectangle.png"
          width={231}
          height={417}
          alt="App Download"
        />
        {/* Container for download-related information */}
        <div className={styles.downloadInfo}>
          {/* Text paragraph for download instruction */}
          <p id="download-instruction">Enter your number and receive a direct link to download the app</p>
          {/* Container for phone number input and button */}
          <form className={styles.inputGroup} id="inputLink">
            <input type="text" name="phoneNumber" placeholder="Enter phone number" className={styles.border0} />
            <p id="errorMessageEmail"></p>
            <button className={`${styles.downloadButton} ${styles.border0} ${styles.pointer}`} id="generateLink">
              Get The Link
            </button>
          </form>
          {/* Container for app store icons */}
          <div className={styles.storeIconsContainer} id="icons">
            <p>Get in on</p>
            <span id="store-icons">
              <Image
                src="/icons/PlayStore-White-logo.svg"
                alt="Play Store"
                width={100}
                height={30}
              />
              <Image
                src="/icons/AppStore-white-logo.svg"
                alt="App Store"
                width={100}
                height={30}
              />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
