// --------------------------------------------------
// import

// react
import React, { useRef, useEffect, useCallback } from "react";

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-house components

// sass styles
import styles from "../../styles/landing/nav.module.sass";

export default function Nav() {
  const navRef = useRef();
  // this callback is responsible to change the background and box-shadow of nav
  // on scroll
  const onWindowScroll = useCallback(() => {
    const offsetY = window.scrollY;
    if (offsetY < 60) {
      navRef.current.style.backgroundColor = "transparent";
      navRef.current.style.boxShadow = "none";
    } else {
      navRef.current.style.backgroundColor = "#fff";
      navRef.current.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onWindowScroll);
    return () => window.removeEventListener("scroll", onWindowScroll);
  }, []);

  return (
    <nav ref={navRef} className={styles.nav}>
      <div className={styles.logo}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="cotain" />
      </div>
      <div className={styles.account}>
        {/* ||todo href should be changed ot Log in page */}
        <Link href="/login" passHref>
          <a className={styles.login}>Log in</a>
        </Link>
        {/* ||todo href should be change to sign up page */}
        <Link href="/" passHref>
          <a className={styles.signup}>Sign up</a>
        </Link>
      </div>
    </nav>
  );
}
