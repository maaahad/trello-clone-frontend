// react

// nextjs
import Image from "next/image";

// in-house components

// sass styles
import styles from "../../styles/account/signup-form.module.sass";

export default function SignupForm() {
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer}>
        <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
      </div>
      <div className={styles.formContainer}>
        <form>This is the form</form>
      </div>
    </div>
  );
}
