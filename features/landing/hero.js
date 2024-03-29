// --------------------------------------------------
// import

// react
import React, { useState, useRef, useEffect, useCallback } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house components

// sass styles
import styles from "../../styles/landing/hero.module.sass";

export default function Hero() {
  const [email, setEmail] = useState("");
  const onEmailInputChange = (event) => {
    setEmail(event.target.value);
  };
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
            <input
              type="email"
              value={email}
              placeholder="Email"
              onChange={onEmailInputChange}
            />
          </div>
          <div className={styles.signupSubmit}>
            <button type="button">Sign up-it's free!</button>
          </div>
        </form>
      </div>
      {/* >=992px */}
      <div className={styles.heroRight}>
        <Image
          src="/landing/hero.png"
          alt="Trello Hero Image"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  );
}
