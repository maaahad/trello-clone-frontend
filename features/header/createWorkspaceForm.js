// react

// sass styles
import styles from "../../styles/header/createWorkspaceForm.module.sass";

export default function CreateWorkspaceForm({ toggleModal = (f) => f }) {
  const onFormContainerClick = (event) => event.stopPropagation();
  return (
    <div onClick={onFormContainerClick} className={styles.formContainer}>
      <div className={styles.header}>Header</div>
      <div> Form</div>
      <div className={styles.header}>Header</div>
      <div> Form</div>
      <div className={styles.header}>Header</div>
      <div> Form</div>
    </div>
  );
}
