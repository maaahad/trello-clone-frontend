// react
import React, { useState, useReducer } from "react";

// nextjs
import Link from "next/link";

// react icons
import { VscAdd, VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { FaTrello } from "react-icons/fa";

// inhouse components
import WorkspaceDropdownMenu from "./workspaceDropdownMenu";

// sass styles
import styles from "../../styles/user/homeLeft.module.sass";

function WorkspaceDropdownToggler({ workspace }) {
  const [menu, toggleMenu] = useReducer((toggle) => !toggle, false);

  return (
    <>
      <div className={styles.workspaceDropdownToggler} onClick={toggleMenu}>
        <div className={styles.workspaceTitle}>
          <div className={styles.workspaceInitial}>{workspace.title[0]}</div>
          <div className={styles.workspaceTitle}>
            {workspace.title.slice(0, 15)}
          </div>
        </div>
        <div className={styles.downArrow}>
          {menu ? <VscChevronUp /> : <VscChevronDown />}
        </div>
      </div>
      {menu && (
        <div className={styles.dropdownMenu}>
          <WorkspaceDropdownMenu />
        </div>
      )}
    </>
  );
}

export default function HomeLeft({ workspaces }) {
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
        {workspaces.map((wp, index) => (
          <WorkspaceDropdownToggler key={index} workspace={wp} />
        ))}
        {workspaces.map((wp, index) => (
          <WorkspaceDropdownToggler key={index} workspace={wp} />
        ))}
      </div>
    </aside>
  );
}
