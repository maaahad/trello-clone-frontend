// --------------------------------------------------
// import

// nextjs

// in-house component
import Layout from "../layout";
import PageBackground from "./page-background";

// sass styles
import styles from "../../styles/account/account-template.module.sass";

// renderContent is passed as render component
export default function AccountTemplate({ title, meta, renderContent }) {
  return (
    <Layout title={title} meta={meta}>
      <div className={styles.pageContainer}>
        {/* Page Backgound */}
        <PageBackground />
        <div className={styles.contentContainer}>{renderContent}</div>
      </div>
    </Layout>
  );
}
