// react

// nextjs
import Link from "next/link";

// react icons
import { BiUser, BiTable, BiCog, BiShoppingBag } from "react-icons/bi";
import { FaTrello, FaTable, FaSuitcase } from "react-icons/fa";

// in-house components
import BoardCard from "./boardCard";

// sass styles
import styles from "../../styles/user/workspaceCard.module.sass";

export default function WorkspaceCard({ workspace }) {
  return (
    <div className={styles.workspaceContainer}>
      <div className={styles.workspace}>
        <div className={styles.workspaceMeta}>
          <div className={styles.workspaceInitial}>{workspace.title[0]}</div>
          <h3 className={styles.workspaceTitle}>{workspace.title}</h3>
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
              <span>Members ({workspace.members.length})</span>
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
              <FaSuitcase />
              <span>Upgrade</span>
            </a>
          </Link>
        </div>
      </div>
      <div className={styles.boardCardsContainer}>
        {workspace.boards.map((board, index) => (
          <BoardCard key={index} board={board} />
        ))}
        <button type="button" className={styles.createNewBoard}>
          <p>Create new board</p>
        </button>
      </div>
    </div>
  );
}
