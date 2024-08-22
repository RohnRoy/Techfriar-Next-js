// components/BranchLocations.js
import Image from 'next/image';
import styles from '../styles/BranchLocations.module.css';

export default function BranchLocations() {
  return (
    <section className={styles.branchLocationContainer}>
      <h2>Locations</h2>
      <div className={styles.locationList}>
        <div className={styles.locationItem}>
          <Image
            src="/icons/Red-Location.svg"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span>Dubai</span>
        </div>
        <div className={styles.locationItem}>
          <Image
            src="/icons/Red-Location.svg"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span>Sharjah</span>
        </div>
        <div className={styles.locationItem}>
          <Image
            src="/icons/Red-Location.svg"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span>Fujairah</span>
        </div>
        <div className={styles.locationItem}>
          <Image
            src="/icons/Red-Location.svg"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span>Abu Dhabi</span>
        </div>
        <div className={`${styles.locationItem} ${styles.borderless}`}>
          <Image
            src="/icons/Red-Location.svg"
            alt="Location Icon"
            width={24}
            height={24}
          />
          <span>Ras Al Khaimah</span>
        </div>
      </div>
    </section>
  );
}
