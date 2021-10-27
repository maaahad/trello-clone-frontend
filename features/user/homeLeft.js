// react

// nextjs
import Link from "next/link";

// react icons
// import {  } from "react-icons/bi";
import { VscAdd } from "react-icons/vsc";
import { FaTrello } from "react-icons/fa";

// sass styles
import styles from "../../styles/user/homeLeft.module.sass";

export default function HomeLeft() {
  // || todo : control the color active link in JS
  // may be by a custom link using userRouter hook to pick the
  // active link
  return (
    <aside className={styles.asideLeftContentContainer}>
      {/* || change the links to boards */}
      <div className={styles.top}>
        <Link href="/user/home" passHref>
          <a>
            <FaTrello /> <span>Boards</span>
          </a>
        </Link>
        <Link href="/user/home" passHref>
          <a>
            <FaTrello /> <span>Templates</span>
          </a>
        </Link>

        <Link href="/user/home" passHref>
          <a>
            <FaTrello /> <span>Home</span>
          </a>
        </Link>
      </div>
      <div className={styles.workspaces}>
        <div>Workspaces</div>
        <button>
          <VscAdd />
        </button>
      </div>
      <div className={styles.workspacesList}>
        {/* the following should have a separate Reuseable component */}
        <div>
          <div>W</div>
          <div>Workspaces One</div>
          <div>downarrow</div>
        </div>
        <div>
          <div>W</div>
          <div>Workspaces One</div>
          <div>downarrow</div>
        </div>
      </div>
    </aside>
  );
}
