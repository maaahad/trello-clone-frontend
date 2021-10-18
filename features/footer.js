// --------------------------------------------------
// import

// nextjs
import Image from "next/image";
import Link from "next/link";

// in-houser hooks
import { useInput } from "../lib/hooks";

// react-icons
import { VscChevronDown } from "react-icons/vsc";
// sass styles
import styles from "../styles/footer.module.sass";

// Should be moved to its's own file
function LanguageSelect() {
  const [languageProps, ,] = useInput("english-uk");
  return (
    <select value={languageProps.value} onChange={languageProps.onChange}>
      <option value="english-uk">English (UK)</option>
      <option value="english-us">English (US)</option>
      <option value="swedish">Swedish</option>
    </select>
  );
}

export default function Footer({
  enableanguageOption = true,
  renderFooterBottom = null,
}) {
  return (
    <footer className={styles.container}>
      {enableanguageOption && (
        <div className={styles.languageSelectionContainer}>
          <LanguageSelect />
          <VscChevronDown />
        </div>
      )}

      <div className={styles.atlassianNquickLinks}>
        <div className={styles.atlassianLogo}>
          <Image
            src="/atlassian-logo.svg"
            layout="fill"
            objectFit="contain"
            alt="Atlassian Logo"
          />
        </div>
        <div className={styles.footerBottom}>
          {renderFooterBottom}
          {/* <Link href="/" passHref>
            <a>Templates</a>
          </Link>
          <Link href="/" passHref>
            <a>Pricing</a>
          </Link>
          <Link href="/" passHref>
            <a>Apps</a>
          </Link>
          <Link href="/" passHref>
            <a>Jobs</a>
          </Link>
          <Link href="/" passHref>
            <a>Blog</a>
          </Link>
          <Link href="/" passHref>
            <a>Developers</a>
          </Link>
          <Link href="/" passHref>
            <a>About</a>
          </Link>
          <Link href="/" passHref>
            <a>Help</a>
          </Link>
          <Link href="/" passHref>
            <a>Cookie Settings</a>
          </Link> */}
        </div>
      </div>
    </footer>
  );
}
