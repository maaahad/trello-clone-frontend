// react

// nextjs

// react icons

import {
  BiSearch,
  BiBell,
  BiInfoCircle,
  BiX,
  BiUpArrowAlt,
} from "react-icons/bi";

// sass styles
import styles from "../../styles/header/rightNav.module.sass";

function SearchInput() {
  return (
    <div className={styles.searchInputContainer}>
      <BiSearch />
      <input type="search" placeholder="Search..." />
      <div className={styles.searchInputRight}>
        <BiUpArrowAlt />
        <BiX />
      </div>
    </div>
  );
}

export default function RightNav() {
  return (
    <div className={styles.rightNavContainer}>
      <button type="button" className={styles.searchButton}>
        <BiSearch />
      </button>

      <SearchInput />

      <button type="button" className={styles.infoButton}>
        <BiInfoCircle />
      </button>
      <button type="button" className={styles.notificationButton}>
        <BiBell />
      </button>
      <button type="button" className={styles.userButton}>
        MA
      </button>
    </div>
  );
}
