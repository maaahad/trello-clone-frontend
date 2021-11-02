// react

// nextjs
import Link from "next/link";

// react icons
import { BiX } from "react-icons/bi";

// sass styles
import styles from "../../styles/header/createDropdownMenu.module.sass";

export default function CreateDropdownMenu({
  toggleCreateDropdownMenu = (f) => f,
}) {
  return (
    <div>
      <div className={styles.title}>
        <div className={styles.account}>Account</div>
        <button
          type="bytton"
          onClick={toggleCreateDropdownMenu}
          className={styles.closeButton}
        >
          <BiX />
        </button>
      </div>
      <div className={styles.divider}></div>

      <div className={styles.profileOptions}>
        <Link href="/use/home">
          <a>Profile and visibility</a>
        </Link>
        <Link href="/use/home">
          <a>Activity</a>
        </Link>
        <Link href="/use/home">
          <a>Cards</a>
        </Link>
        <Link href="/use/home">
          <a>Settings</a>
        </Link>
      </div>
    </div>
  );
}
