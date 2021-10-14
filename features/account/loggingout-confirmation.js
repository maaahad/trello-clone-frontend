// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// react-icons

import { FaUserCircle } from "react-icons/fa";

// sass styles
import styles from "../../styles/account/loggingout-confirmation.module.sass";

export default function LoggingoutConfirmation() {
  return (
    <div className={styles.formSubContainer}>
      <h1>Log out of your Atlassian account</h1>
      <div className={styles.userInfo}>
        <div className={styles.avatarContainer}>
          <FaUserCircle />
        </div>
        <div className={styles.user}>
          <div>Muhammed Ahad</div>
          <div>ahad@yahoo.com</div>
        </div>
      </div>
      <button type="button">Log out</button>
      <hr />
      <Link href="/account/login" passHref>
        <a>Log in to another account</a>
      </Link>
    </div>
  );
}
