// react

// nextjs
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
          <button>Boards</button>
          <button>Workspace table</button>
          <button>Members</button>
          <button>Settings</button>
          <button>Upgrade</button>
        </div>
      </div>
      <div className={styles.boardCardsContainer}>
        <div>Board 1</div>
        <div>Board 2</div>
      </div>
    </div>
  );
}
