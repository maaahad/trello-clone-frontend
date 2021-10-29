// import
// react
import React from "react";

// react icons
// nextjs
// in-house components
import LeftNav from "./leftNav";
import RightNav from "./rightNav";

// in-house hooks

// in-house libs

// sass styles
import styles from "../../styles/header/nav.module.sass";

function DotRow() {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function MenuButton() {
  return (
    <div className={styles.menuButton}>
      <DotRow />
      <DotRow />
      <DotRow />
    </div>
  );
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <LeftNav />
      <RightNav />
    </nav>
  );
}
