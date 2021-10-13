// --------------------------------------------------
// import

// react

// nextjs
import Image from "next/image";

// in-house components

// sass styles
import styles from "../../styles/account/form-background.module.sass";

export default function PageBackground() {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/account/left.png" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.imageContainer}>
        <Image src="/account/right.png" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}
