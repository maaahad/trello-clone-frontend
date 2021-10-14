// --------------------------------------------------
// import

// nextjs
import Image from "next/image";

// in-house component
import Layout from "../layout";
import PageBackground from "./page-background";

// react-icons
import { VscChevronDown } from "react-icons/vsc";

// in-houser hooks
import { useInput } from "../../lib/hooks";

// sass styles
import styles from "../../styles/account/account-template.module.sass";

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

// renderContent is passed as render component
export default function AccountTemplate({ title, meta, renderContent }) {
  return (
    <Layout title={title} meta={meta}>
      <div className={styles.pageContainer}>
        {/* Page Backgound */}
        <PageBackground />
        <div className={styles.contentContainer}>
          <div className={styles.contentSubContianer}>
            <div className={styles.logoContainer}>
              <Image src="/trello-logo.svg" layout="fill" objectFit="contain" />
            </div>
            <div className={styles.formContainer}>{renderContent}</div>

            {/* the followin should move to the account template */}
            <div className={styles.languageChoice}>
              <LanguageSelect />
              {/* we add a custom caret */}
              <VscChevronDown />
            </div>

            <footer className={styles.footer}>
              This will be the footer...This will have a complete separate
              component to be used by other page
            </footer>
          </div>
        </div>
      </div>
    </Layout>
  );
}
