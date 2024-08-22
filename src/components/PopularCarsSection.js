import Image from 'next/image';
import styles from '../styles/PopularCarsSection.module.css';

export default function PopularCarsSection() {
  return (
    <section className={styles.popularCarsSection}>
      <h2>Most Popular Cars</h2>
      {/* Horizontal Scroll */}
      <div className={styles.popularCarsScrollContainer}>
        {/* First Car Item */}
        <div className={styles.carItem}>
          <Image
            src="/images/scoll-bar-image1.png"
            width={360}
            height={290}
            alt="Mitsubishi Car"
            className={styles.vehicleImage}
          />
          <div className={styles.carItemDetails}>
            <h3>Mitsubishi Eclipse</h3>
            <p className={styles.carItemDescription}>
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.
            </p>

            <div className={styles.vehicleInfo}>
              {/* Vehicle Specification */}
              <div>
                <Image
                  src="/icons/Seating-Capacity.svg"
                  width={12}
                  height={15}
                  alt="Seating Capacity"
                />
                <p>6 People</p>
              </div>
              <div>
                <Image
                  src="/icons/Vehicle-gear-type.svg"
                  width={12}
                  height={15}
                  alt="Vehicle Gear Type"
                />
                <p>Automatic</p>
              </div>
              <div>
                <Image
                  src="/icons/car-door.svg"
                  width={12}
                  height={15}
                  alt="Car Door"
                />
                <p>5 Doors</p>
              </div>
              <div>
                <Image
                  src="/icons/air-conditioner.svg"
                  width={12}
                  height={15}
                  alt="Air Conditioner"
                />
                <p>AC</p>
              </div>
            </div>
            <div className={styles.carItemPricing}>
              <p className={styles.carItemPrice}>AED 2700/Monthly</p>
              <button className={`${styles.carItemButton} border-0`}>Book Now</button>
            </div>
          </div>
        </div>

        {/* Second Car Item */}
        <div className={styles.carItem}>
          <Image
            src="/images/Second-car.svg"
            width={360}
            height={290}
            alt="Vehicle Image"
            className={styles.vehicleImage}
          />
          <div className={styles.carItemDetails}>
            <h3>Jac J7</h3>
            <p className={styles.carItemDescription}>
              S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.
            </p>

            <div className={styles.vehicleInfo}>
              <div>
                <Image
                  src="/icons/Seating-Capacity.svg"
                  width={12}
                  height={15}
                  alt="Seating Capacity"
                />
                <p>6 People</p>
              </div>
              <div>
                <Image
                  src="/icons/Vehicle-gear-type.svg"
                  width={12}
                  height={15}
                  alt="Vehicle Gear Type"
                />
                <p>Automatic</p>
              </div>
              <div>
                <Image
                  src="/icons/car-door.svg"
                  width={12}
                  height={15}
                  alt="Car Door"
                />
                <p>5 Doors</p>
              </div>
              <div>
                <Image
                  src="/icons/air-conditioner.svg"
                  width={12}
                  height={15}
                  alt="Air Conditioner"
                />
                <p>AC</p>
              </div>
            </div>
            <div className={styles.carItemPricing}>
              <p className={styles.carItemPrice}>AED 2700/Monthly</p>
              <button className={`${styles.carItemButton} border-0`}>Book Now</button>
            </div>
          </div>
        </div>

        {/* Third Car Item */}
        <div className={styles.carItem}>
          <Image
            src="/images/scoll-bar-image1.png"
            width={360}
            height={290}
            alt="Mitsubishi Car"
            className={styles.vehicleImage}
          />
          <div className={styles.carItemDetails}>
            <h3>Mitsubishi Eclipse</h3>
            <p className={styles.carItemDescription}>
              Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.
            </p>

            <div className={styles.vehicleInfo}>
              <div>
                <Image
                  src="/icons/Seating-Capacity.svg"
                  width={12}
                  height={15}
                  alt="Seating Capacity"
                />
                <p>6 People</p>
              </div>
              <div>
                <Image
                  src="/icons/Vehicle-gear-type.svg"
                  width={12}
                  height={15}
                  alt="Vehicle Gear Type"
                />
                <p>Automatic</p>
              </div>
              <div>
                <Image
                  src="/icons/car-door.svg"
                  width={12}
                  height={15}
                  alt="Car Door"
                />
                <p>5 Doors</p>
              </div>
              <div>
                <Image
                  src="/icons/air-conditioner.svg"
                  width={12}
                  height={15}
                  alt="Air Conditioner"
                />
                <p>AC</p>
              </div>
            </div>
            <div className={styles.carItemPricing}>
              <p className={styles.carItemPrice}>AED 2700/Monthly</p>
              <button className={`${styles.carItemButton} border-0`}>Book Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
