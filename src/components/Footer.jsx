// import React from "react";
import logoFooter from "../assets/images/logo.svg";
import styles from "./Footer.module.css";
function Footer() {
  return (
    <div className={styles.footerBg}>
      <div className="container">
        <div className={styles.footer}>
          <div className={styles.logo}>
            <img
              src={logoFooter}
              className={styles.logoFooter}
              alt="logoFooter"
            />
          </div>
          <div className={styles.quickLinks}>
            <h2>Quick Links</h2>
            <hr />
            <h3>Sign Up</h3>
            <h3>About Us</h3>
          </div>
          <div className={styles.others}>
            <h2>Others</h2>
            <hr />
            <h3>User FAQs</h3>
            <h3>Contact Us</h3>
            <h3>Legal</h3>
            <h3>Privacy Policy</h3>
            <h3>Terms and Conditions</h3>
          </div>
          <div className={styles.products}>
            <h2>Products</h2>
            <hr />
            <h3>Send</h3>
            <h3>Receive</h3>
            <h3>Buy</h3>
          </div>
          <div className={styles.subs}>
            <p>
              Subscribe to our newsletter and be the first to know about our
              updates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
