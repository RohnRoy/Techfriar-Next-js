// components/RentalInstructions.js
import Image from 'next/image';
import styles from '../styles/RentalInstructions.module.css';

export default function RentalInstructions() {
  return (
    <section className={styles.rentalInstructions}>
      <h2>Rent/Lease In Three Easy Steps</h2>
      <div className={styles.stepsContainer}>
        {/* Step 1 */}
        <div className={styles.stepItem}>
          <h3 className={styles.stepNumber}>01</h3>
          <div className={styles.stepDetails}>
            <Image
              src="/icons/Fading-Location.svg"
              alt="Fading Location"
              width={50}
              height={50}
            />
            <p className={styles.stepDescription}>
              Select the location. Browse through our available options and find the perfect car to suit your needs.
            </p>
          </div>
        </div>
        {/* Step 2 */}
        <div className={styles.stepItem}>
          <h3 className={styles.stepNumber}>02</h3>
          <div className={styles.stepDetails}>
            <Image
              src="/icons/Fading-Calender.svg"
              alt="Fading Calender"
              width={50}
              height={50}
            />
            <p className={styles.stepDescription}>Choose your desired Pick-Up date and time.</p>
          </div>
        </div>
        {/* Step 3 */}
        <div className={styles.stepItem}>
          <h3 className={styles.stepNumber}>03</h3>
          <div className={styles.stepDetails}>
            <Image
              src="/icons/Fading-Car-logo.svg"
              alt="Fading Car Logo"
              width={50}
              height={50}
            />
            <p className={styles.stepDescription}>
              Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
