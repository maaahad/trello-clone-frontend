// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// sass styles
import styles from "../../styles/utilities/links.module.sass";

export default function Links({ links }) {
  return (
    <div className={styles.linksContainer}>
      {links.map((link, i) => (
        <Link key={i} href={link.href} passHref>
          <a>{link.label}</a>
        </Link>
      ))}
    </div>
  );
}
