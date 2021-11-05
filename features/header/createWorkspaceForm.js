// react

// nextjs
import Image from "next/image";

// react icons
import { BiX } from "react-icons/bi";

// in-house hooks
import { useInput } from "../../lib/hooks";
// sass styles
import styles from "../../styles/header/createWorkspaceForm.module.sass";

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
          <span>This is the name of your company, team or organization.</span>
        </div>

        <div className={styles.workspaceType}>
          <label htmlFor="title">Workspace type</label>
          {/* need a separate component will all the possible options */}
          <select
            id="title"
            value={workspaceTypeProps.value}
            onChange={workspaceTypeProps.onChange}
          >
            <option value="choose">Choose...</option>
            <option value="small-business">Small Business</option>
            <option value="education">Educations</option>
            <option value="marketing">Marketing</option>
          </select>
        </div>

        <div className={styles.workspaceDescription}>
          <label id="workspaceDescr">
            Workspace description <span>Optionsl</span>
          </label>
          <textarea
            id="workspaceDescr"
            value={workspaceDescriptionProps.value}
            onChange={workspaceDescriptionProps.onChange}
            placeholder="Our team organizes everything here."
          />
          <span>
            Get your members on board with a few words about your Workspace.
          </span>
        </div>
        <button type="submit">Continue</button>
      </form>
    </div>
  );
}
