import styles from '../styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navBarContainer}>
        <img
          src="/images/Social-Media-Icons.svg"
          width="90"
          alt="Social Media Icons Group"
          className={`${styles.socialMediaIconsGroup} ${styles.pointer}`}
        />
        <div className={styles.navigationHeader}>
          <div className={styles.BrandlogoHamburger}>
            <img
              src="/images/BrandLogoText.svg"
              width="280"
              height="48"
              alt="AlHabtoor-BrandLogo"
              className={styles.BrandLogo}
            />
            <img
              src="/icons/charm_menu-hamburger.svg"
              alt="charm_menu-hamburger-icon"
              id={styles.hamburgerMenu}
            />
          </div>
          <div className={styles.navbarMenu}>
            <a href="#">About</a>
            <a href="#">Offers</a>
            <a href="#">Corporate</a>
            <a href="#">Personal</a>
            <a href="#">Locations</a>
            <a href="#">Contact Us</a>
            <a href="#">
              <img
                src="/icons/Bell-Icon.svg"
                alt="Bell-Icon-with-Notification"
              />
            </a>
            <a href="#">
              <img
                src="/images/Person.svg"
                alt="Logged In Person"
                className={styles.loginIndicator}
                width="98"
              />
            </a>
          </div>
          <div className={styles.sidebar}>
            <img
              src="/icons/Close-Icon.svg"
              alt="Close Icon For Side Bar"
              id={styles.closeButtonIcon}
              width="24"
              height="24"
            />
            <div className={styles.dropMenuNavMenu}>
              <a href="#">About</a>
              <a href="#">Offers</a>
              <a href="#">Corporate</a>
              <a href="#">Personal</a>
              <a href="#">Locations</a>
              <a href="#">Contact Us</a>
              <button className={styles.loginSignUpButton}>
                <img src="/images/LoginButton.svg" alt="Login button" />
              </button>
            </div>
          </div>
        </div>
        <marquee className={styles.serviceInfo}>
          Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All
          Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for
          New Offers
        </marquee>
      </nav>
    </header>
  );
}
