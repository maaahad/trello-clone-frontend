// --------------------------------------------------
// import

// react icons
import { BiUser, BiTable, BiCog, BiShoppingBag } from "react-icons/bi";
import { FaTrello } from "react-icons/fa";
import { VscHeart, VscChevronRight } from "react-icons/vsc";
import { FiCheckSquare, FiHeart, FiUsers, FiSettings } from "react-icons/fi";

// sass styles
import styles from "../../styles/user/workspaceDropdownMenu.module.sass";

function MenuOption({ icon, label, value = null, rightChevron = true }) {
  return (
    <button className={styles.menuOption}>
      <div className={styles.menuOptionLeft}>
        {icon}
        <span>{label}</span>
      </div>
      {rightChevron && (
        <div className={styles.menuOptionRight}>
          {value && <span>4</span>}
          <VscChevronRight />
        </div>
      )}
    </button>
  );
}

export default function WorkspaceDropdownMenu({ workspace }) {
  return (
    <div className={styles.workspaceDropdownMenuContainer}>
      <MenuOption icon={<FiCheckSquare />} label="Getting started" value={4} />
      <MenuOption icon={<FaTrello />} label="Trello" rightChevron={false} />
      <MenuOption icon={<FiHeart />} label="Highlights" rightChevron={false} />
      <MenuOption icon={<BiTable />} label="Workspaces table" />
      <MenuOption icon={<FiUsers />} label="Members" />
      <MenuOption icon={<BiCog />} label="Settings" />
    </div>
  );
}
