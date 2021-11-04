// react
import React, { useRef } from "react";
// nextjs
import Image from "next/image";

// react icons

import { BiPlus } from "react-icons/bi";
import { VscChevronDown } from "react-icons/vsc";

// in-house component
import CreateDropdown from "./createDropdown";

// sass styles
import styles from "../../styles/header/leftNav.module.sass";

function DotRow() {
  return (
    <div className={styles.dotRow}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

function NineDots() {
  return (
    <div className={styles.menuDotsContainer}>
      <DotRow />
      <DotRow />
      <DotRow />
    </div>
  );
}

function Activities() {
  return (
    <div className={styles.activitiesContainer}>
      <button type="button" className={styles.workspaces}>
        <span>Workspaces</span>
        <VscChevronDown />
      </button>
      <button type="button" className={styles.recent}>
        <span>Recent</span>
        <VscChevronDown />
      </button>
      <button type="button" className={styles.more}>
        <span>More</span>
        <VscChevronDown />
      </button>
    </div>
  );
}

export default function LeftNav({
  toggleDropdown = (f) => f,
  onCreateClick = (f) => f,
}) {
  const createRef = useRef();
  const dropdownComponent = <CreateDropdown toggleDropdown={toggleDropdown} />;
  return (
    <div className={styles.leftNavContainer}>
      <button type="button" className={styles.menuButton}>
        <NineDots />
      </button>
      <div className={styles.trelloLogo}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <Activities />
      {/* 304 is the width of the dropdown menu */}
      <button
        ref={createRef}
        type="button"
        className={styles.createButton}
        onClick={(event) =>
          onCreateClick({
            event,
            controllerRef: createRef,
            newDropdown: dropdownComponent,
            dropdownWidth: 304,
          })
        }
      >
        <BiPlus />
      </button>
    </div>
  );
}
