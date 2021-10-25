// react

// nextjs
import Link from "next/link";

// react icons
import { BiUser, BiTable, BiCog, BiShoppingBag } from "react-icons/bi";
import { FaTrello, FaTable } from "react-icons/fa";

// in-house components
import BoardCard from "./boardCard";

// sass styles
import styles from "../../styles/user/workspaceCard.module.sass";

export default function WorkspaceCard({ workspace }) {
  return (
    <div className={styles.workspaceContainer}>
      <div className={styles.workspace}>
        <div className={styles.workspaceMeta}>
          <div className={styles.workspaceInitial}>w</div>
          <h3 className={styles.workspaceTitle}>Title of the workspaces</h3>
        </div>
        <div className={styles.workspaceOptions}>
          <Link href="/" passHref>
            <a>
              <FaTrello />
              <span>Boards</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <BiTable />
              <span>Workspace table</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <BiUser />
              <span>Members (1)</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <BiCog />
              <span>Settings</span>
            </a>
          </Link>
          <Link href="/" passHref>
            <a>
              <BiShoppingBag />
              <span>Upgrade</span>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.boardCardsContainer}>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <button type="button" className={styles.createNewBoard}>
          <p>Create new board</p>
        </button>
      </div>
    </div>
  );
}
