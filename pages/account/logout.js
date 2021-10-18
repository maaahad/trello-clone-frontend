// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// in-house component
import LogoutConfirmation from "../../features/account/logout-confirmation";
import DocumentWrapper from "../../features/account/document-wrapper";
import Footer from "../../features/footer";

// sass styles
import styles from "../../styles/account/logout.module.sass";

export default function Logout() {
  const renderAdditionalLinks = () => {
    return (
      <>
        <Link href="/" passHref>
          <a>Privacy Policy</a>
        </Link>
        <div
          style={{
            width: "4px",
            height: "4px",
            "border-radius": "50%",
            "background-color": "#4d4d4d",
          }}
        ></div>
        <Link href="/" passHref>
          <a>User Notice</a>
        </Link>
      </>
    );
  };

  const renderFooterBottom = (
    <div className={styles.logoutFooterBottom}>
      <p>
        One account for Trello, Jira, Confluence and{" "}
        <Link href="/" passHref>
          <a>more</a>
        </Link>
        .
      </p>
    </div>
  );
  return (
    <DocumentWrapper
      title="logging out from Trello"
      meta={{
        name: "description",
        content: "This is the Loging out page for Trello-Clone",
      }}
      form={<LogoutConfirmation />}
      renderAdditionalLinks={renderAdditionalLinks}
      footer={<Footer renderFooterBottom={renderFooterBottom} />}
    />
  );
}
