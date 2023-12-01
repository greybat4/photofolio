import React from "react";
import styles from "./navbar.module.css";
// rfce

function Navbar() {
  return (
      <div className={styles.navbar}>
        <img
          className={styles.logo}
          src={require("../../assets/images/nav-logo.png")}
          alt="logo-image"
        />
        <span>Photo-Album</span>
      </div>
  );
}

export default Navbar;
