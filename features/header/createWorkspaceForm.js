// react
import React, { useRef, useReducer, useEffect, useState } from "react";
// nextjs
import Image from "next/image";

// react icons
import { BiX } from "react-icons/bi";

import { VscChevronDown } from "react-icons/vsc";
// in-house hooks
import { useInput } from "../../lib/hooks";
// sass styles
import styles from "../../styles/header/createWorkspaceForm.module.sass";

const typeSelectOptions = [
  "Small Business",
  "Sales CRM",
  "Operations",
  "Engineering-IT",
  "Human Resources",
  "Education",
  "Marketing",
];

function SelectOptions({ style, toggleDisplayOptions = (f) => f }) {
  return (
    <div style={{ ...style }} className={styles.selectOptions}>
      {typeSelectOptions.map((option, index) => (
        <div key={index} onClick={toggleDisplayOptions}>
          {option}
        </div>
      ))}
    </div>
  );
}

function CustomSelect() {
  const selectRef = useRef();
  const selectOptionsRef = useRef();
  const [optionsComponent, setOptionsComponent] = useState(null);
  // || todo : need useModal like hooks
  const [displayOptions, toggleDisplayOptions] = useReducer(
    (displayOptions) => {
      if (displayOptions) {
        setOptionsComponent(null);
      } else {
        const { bottom } = selectRef.current.getBoundingClientRect();
        setOptionsComponent(
          <SelectOptions
            toggleDisplayOptions={toggleDisplayOptions}
            style={{ top: `${bottom}px`, left: 0 }}
          />
        );
      }
      return !displayOptions;
    },
    false
  );

  const onLabelClick = () => {
    selectRef.current.focus();
  };

  //   const onSelectControllerClick = (event) => {
  //     event.stopPropagation();
  //     console.log(selectRef.current.getBoundingClientRect());
  //     // selectRef.current.nextElementSidbling.style.color = "red";
  //     toggleDisplayOptions();
  //   };

  return (
    <>
      <label htmlFor="workspaceType" onClick={onLabelClick}>
        Workspace type
      </label>
      <div
        id="workspaceType"
        ref={selectRef}
        tabIndex={0}
        onClick={toggleDisplayOptions}
        className={styles.customSelect}
      >
        <div>Choose...</div>
        <div>
          <VscChevronDown />
        </div>
      </div>
      {/* Select options */}
      {optionsComponent}
    </>
  );
}

export default function CreateWorkspaceForm({ toggleModal = (f) => f }) {
  const [titleProps, ,] = useInput("");
  const [workspaceTypeProps, ,] = useInput("choose");
  const [workspaceDescriptionProps, ,] = useInput("");

  const onFormContainerClick = (event) => event.stopPropagation();
  return (
    <div onClick={onFormContainerClick} className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerImage}>
          <Image
            src="/user/create-workspace-header.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <button className={styles.closeButton} onClick={toggleModal}>
          <BiX />
        </button>
      </div>
      <form className={styles.workspaceForm}>
        <div className={styles.formHeader}>
          <h3>Let's build a Workspace</h3>
          <p>
            Boost your productivity by making it easier for everyone to access
            boards in one location.
          </p>
        </div>
        <div className={styles.workspaceTitle}>
          <label htmlFor="title">Workspace name</label>
          <input
            type="text"
            id="title"
            value={titleProps.value}
            onChange={titleProps.onChange}
            placeholder="Taco's Co."
          />
          <span className={styles.additionalInputInfo}>
            This is the name of your company, team or organization.
          </span>
        </div>

        <div className={styles.workspaceType}>
          <CustomSelect />
          {/* need a separate component will all the possible options */}
          {/* <select
            id="workspaceType"
            value={workspaceTypeProps.value}
            onChange={workspaceTypeProps.onChange}
          >
            <option value="choose">Choose...</option>
            <option value="small-business">Small Business</option>
            <option value="education">Educations</option>
            <option value="marketing">Marketing</option>
          </select> */}
        </div>

        <div className={styles.workspaceDescription}>
          <label htmlFor="workspaceDescr">
            Workspace description{" "}
            <span className={styles.optional}>Optional</span>
          </label>
          <textarea
            id="workspaceDescr"
            value={workspaceDescriptionProps.value}
            onChange={workspaceDescriptionProps.onChange}
            placeholder="Our team organizes everything here."
          />
          <span className={styles.additionalInputInfo}>
            Get your members on board with a few words about your Workspace.
          </span>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
