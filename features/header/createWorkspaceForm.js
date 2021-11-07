// react
import React, { useRef, useReducer, useEffect, useState } from "react";
// nextjs
import Image from "next/image";

// react icons
import { BiX } from "react-icons/bi";

import { VscChevronDown } from "react-icons/vsc";
// in-house hooks
import { useInput, useDropdownComponent } from "../../lib/hooks";
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

function SelectOptions({
  position,
  toggleDisplaySelectOptions = (f) => f,
  setSelectValue = (f) => f,
}) {
  const onSelect = (value) => {
    setSelectValue(value);
    toggleDisplaySelectOptions();
  };
  return (
    <div style={{ ...position }} className={styles.selectOptions}>
      {typeSelectOptions.map((option, index) => (
        <div key={index} onClick={() => onSelect(option)}>
          {option}
        </div>
      ))}
    </div>
  );
}

function CustomSelect() {
  const selectRef = useRef();
  const [selectOptionsPosition, setSelectOptionsPosition] = useState(null);
  const [selectValue, setSelectValue] = useState("Choose...");

  // custom hook to controll the display of SelectiOptions
  const [
    displaySelectOptions,
    renderComponent,
    toggleDisplaySelectOptions,
    onControllerClick,
    reset,
  ] = useDropdownComponent();

  const onLabelClick = () => {
    selectRef.current.focus();
  };

  //   setting up the position for the selectOptions
  useEffect(() => {
    if (!displaySelectOptions) return;

    const { bottom } = selectRef.current.getBoundingClientRect();
    // console.log(bottom);
    setSelectOptionsPosition({ top: `${bottom}px`, left: 0 });
  }, [displaySelectOptions]);

  //   selectOptions
  const selectOptions = (
    <SelectOptions
      toggleDisplaySelectOptions={toggleDisplaySelectOptions}
      position={selectOptionsPosition}
      setSelectValue={setSelectValue}
    />
  );
  const onSelectControllerClick = (event) => {
    // event.stopPropagation();
    onControllerClick(event, selectOptions);
  };

  //   console.log(displaySelectOptions, renderComponent);

  return (
    <>
      <label htmlFor="workspaceType" onClick={onLabelClick}>
        Workspace type
      </label>
      <div
        id="workspaceType"
        ref={selectRef}
        tabIndex={0}
        onClick={onSelectControllerClick}
        className={styles.customSelect}
      >
        <div>{selectValue}</div>
        <div>
          <VscChevronDown />
        </div>
      </div>
      {/* Select options */}
      {displaySelectOptions && renderComponent}
    </>
  );
}

export default function CreateWorkspaceForm({ toggleModal = (f) => f }) {
  const [titleProps, ,] = useInput("");
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
        <button
          type="button"
          className={styles.continueButton}
          disabled={false}
        >
          Continue
        </button>
      </form>
    </div>
  );
}
