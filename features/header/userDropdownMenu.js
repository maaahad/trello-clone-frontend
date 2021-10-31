// react

// nextjs
import Link from "next/link";
// react icons
import { BiX } from "react-icons/bi";

// sass styles
import styles from "../../styles/header/userDropdownMenu.module.sass";

export default function UserDropdownMenu({
  user,
  toggleUserDropdownMenu = (f) => f,
}) {
  return (
    <div className={styles.userDropdownMenu}>
      <div className={styles.title}>
        <div className={styles.account}>Account</div>
        <button
          type="bytton"
          onClick={toggleUserDropdownMenu}
          className={styles.closeButton}
        >
          <BiX />
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.user}>
        <div className={styles.userInfo}>
          <div className={styles.usersInitial}>MA</div>
          <div className={styles.nameNEmail}>
            <div>Muhammed Ahad</div>
            <div>maaahad@yahoo.com</div>
          </div>
        </div>
        <button type="button">Add another account</button>
      </div>

      <div className={styles.divider}></div>

      <div>
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

      <div className={styles.divider}></div>

      <div>
        <Link href="/use/home">
          <a>Help</a>
        </Link>
        <Link href="/use/home">
          <a>Shortcuts</a>
        </Link>
      </div>
      <button type="button">Logout</button>
    </div>
  );
}
