// --------------------------------------------------
// import

// react
import React, { useRef, useEffect, useCallback } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house components

// sass styles
import styles from "../../styles/landing/hero.module.sass";

export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      {/* < 768px */}
      <div className={styles.heroLeft}>
        <h1>Trello helps teams move work forward.</h1>
        <p>
          Collaborate, manage projects, and reach new productivity peaks. From
          high rises to the home office, the way your team works is
          unique—accomplish it all with Trello.
        </p>
        {/* input for >= 768px */}
        <form className={styles.signupForm}>
          <div className={styles.signupEmail}>
            <input type="email" placeholder="Email" />
          </div>
          <div className={styles.signupSubmit}>
            <button type="button">Sign up-it's free!</button>
          </div>
        </form>
      </div>
      {/* >=992px */}
      <div className={styles.heroRight}>
        <img
          src="https://d2k1ftgv7pobq7.cloudfront.net/meta/p/res/images/spirit/hero/6a3ccd8e5c9a0e8ebea4235d12da6b24/hero.png"
          alt="Trello Hero Image"
          style={{ width: "100px", height: "auto" }}
        />
      </div>
    </div>
  );
}
