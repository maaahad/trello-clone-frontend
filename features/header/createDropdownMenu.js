// react icon// react icons
import { BiX, BiShoppingBag } from "react-icons/bi";
import { FaTrello, FaSuitcase } from "react-icons/fa";

import { FiUsers } from "react-icons/fi";

// sass styles
import styles from "../../styles/header/dropdownMenus.module.sass";

export default function CreateDropdownMenu({
  toggleCreateDropdownMenu = (f) => f,
}) {
  return (
    <nav className={styles.dropdownMenus}>
      <div className={styles.header}>
        <div className={styles.title}>Create</div>
        <button
          type="button"
          onClick={toggleCreateDropdownMenu}
          className={styles.closeButton}
        >
          <BiX />
        </button>
      </div>

      <div className={styles.divider}></div>

      <div className={styles.moreUserOptions}>
        <div>
          <button type="button">
            <FaTrello /> Create board
          </button>
          <p>
            A board is made up of cards ordered on lists. Use it to manage
            projects, track information, or organize anything.
          </p>
        </div>
        <div>
          <button type="button">
            <FaTrello /> Start with a template
          </button>
          <p>Get started faster with a board template.</p>
        </div>
        <div>
          <button type="button">
            <FiUsers /> Create Workspace
          </button>
          <p>
            A Workspace is a group of boards and people. Use it to organize your
            company, side hustle, family, or friends.
          </p>
        </div>
        <div>
          <button type="button">
            <FaSuitcase /> Create business Workspaces
          </button>
          <p>
            With Premium your Workspace has more security, administrative
            controls, and unlimited Power-Ups.
          </p>
        </div>
      </div>
    </nav>
  );
}
