// components/Footer.js
import Image from 'next/image';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.companyProfileSection}>
        <div className={styles.contactSectionContainer}>
          <div className={styles.companyLogoSection}>
            <Image
              src="/icons/Company-Brand-logo.svg"
              alt="Company-Brand-logo"
              width={57}
              height={66}
            />
            <p>Member of the Al Habtoor Group</p>
          </div>

          {/* Footer Navigation Links for Desktop */}
          <div className={styles.footerNavigationDesktop}>
            <div className={styles.footerNavMain}>
              <a href="#">Home</a>
              <a href="#">About Us</a>
              <a href="#">Services</a>
              
            </div>
            <div className={styles.footerNavOffers}>
              <a href="#">Offers</a>
              <a href="#">Location</a>
              <a href="#">Contact Us</a>
            </div>
            <div className={styles.footerNavLegal}>
              <a href="#">FAQ</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Service Request</a>
            </div>
            <div className={styles.footerNavCareers}>
              <a href="#">Careers</a>
              <a href="#">Terms & Conditions</a>
            </div>
          </div>

          {/* Footer Navigation Links for Mobile */}
          <div className={styles.footerNavigationMobile}>
            <a href="#">Home</a>
            <a href="#">Offers</a>
            <a href="#">Career</a>
            <a href="#">About Us</a>
            <a href="#">Locations</a>
            <a href="#">FAQ</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Service Request</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </div>

          {/* Social Media Links */}
          <div className={styles.followUsContainer}>
            <h3>Follow Us On</h3>
            <div>
              <a href="#"><Image src="/icons/Facebookicon.svg" alt="Facebook" width={16} height={16} className={styles.imageBackgroundColorWhite} /></a>
              <a href="#"><Image src="/icons/Twiiter.svg" alt="Twitter" width={16} height={16} className={styles.imageBackgroundColorWhite} /></a>
              <a href="#"><Image src="/icons/Instagram.svg" alt="Instagram" width={16} height={16} className={styles.imageBackgroundColorBlack} /></a>
              <a href="#"><Image src="/icons/LinkedIn.svg" alt="LinkedIn" width={16} height={16} className={styles.imageBackgroundColorBlack} /></a>
              <a href="#"><Image src="/icons/Youtube.svg" alt="YouTube" width={16} height={16} className={styles.imageBackgroundColorBlack} /></a>
            </div>
            <Image src="/images/SecurelockIcon.svg" alt="Secure Lock Icon" width={24} height={24} id={styles.secureLockSmall} />
          </div>
        </div>

        <div className={styles.subCompanies}>
          <div className={styles.parentCompany}>
            <h3>Al Habtoor Companies</h3>
          </div>
          <div className={styles.subCompaniesContainer}>
            <a href="#">Hospitality</a>
            <a href="#">Real Estate</a>
            <a href="#">Education</a>
            <a href="#">Publishing</a>
            <a href="#">Automotive</a>
            <a href="#">Vehicle Leasing</a>
          </div>
          <Image src="/images/Secure-Lock.svg" alt="Secure Lock Icon" width={24} height={24} className={styles.secureLock} />
        </div>

        <div className={styles.copyrightContent}>
          © 2018 Car rental LLC - All Rights Reserved.
        </div>
      </section>
    </footer>
  );
}
