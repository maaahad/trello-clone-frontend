// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// react-icons

import { FaUserCircle } from "react-icons/fa";

// sass styles
import styles from "../../styles/account/logout-confirmation.module.sass";

export default function LogoutConfirmation() {
  return (
    <div className={styles.formSubContainer}>
      <h5>Log out of your Atlassian account</h5>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <FaUserCircle />
        </div>
        <div className={styles.user}>
          <h2>Muhammed Ahad</h2>
          <p>ahad@yahoo.com</p>
        </div>
      </div>
      <button type="button" className={styles.logoutButton}>
        Log out
      </button>
      <div className={styles.link}>
        <Link href="/account/login" passHref>
          <a className={styles.anchorTag}>Log in to another account</a>
        </Link>
      </div>
    </div>
  );
}
