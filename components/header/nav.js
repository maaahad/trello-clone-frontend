// import
// react

// react icons
import { FaTrello } from "react-icons/fa";

import { BiSearch, BiPlus, BiBell } from "react-icons/bi";

// nextjs
import Image from "next/image";

// in-house components

// sass styles
import styles from "../../styles/header/nav.module.sass";

function DotRow() {
  return (
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div>
        <button type="button">
          <DotRow />
          <DotRow />
          <DotRow />
        </button>
        <button type="button">
          <FaTrello />
        </button>
        <button type="button">
          <BiSearch />
        </button>
      </div>
      <div>
        <Image src="/trello-logo.svg" width={50} height={40} />
      </div>
      <div>
        <button type="button">
          <BiPlus />
        </button>
        <button type="button">
          <BiBell />
        </button>
        <button type="button">MA</button>
      </div>
    </nav>
  );
}
