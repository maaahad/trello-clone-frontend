// react

// nextjs
import Image from "next/image";

// react icons

import { BiPlus } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

// sass styles
import styles from "../../styles/header/leftNav.module.sass";

function DotRow() {
  return (
    <div className={styles.dotRow}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function NineDots() {
  return (
    <div className={styles.menuDotsContainer}>
      <DotRow />
      <DotRow />
      <DotRow />
    </div>
  );
}

function Activities() {
  return (
    <div className={styles.activitiesContainer}>
      <button type="button">
        <span>Workspaces</span>
        <VscChevronDown />
      </button>
      <button type="button">
        <span>Recent</span>
        <VscChevronDown />
      </button>
      <button type="button">
        <span>More</span>
        <VscChevronDown />
      </button>
    </div>
  );
}

export default function LeftNav() {
  return (
    <div className={styles.leftNavContainer}>
      <button type="button" className={styles.menuButton}>
        <NineDots />
      </button>
      <div className={styles.trelloLogo}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <Activities />
      <button type="button" className={styles.createButton}>
        <BiPlus />
      </button>
    </div>
  );
}