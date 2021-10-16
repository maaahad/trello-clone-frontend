// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// in-house component
import LoginForm from "../../features/account/login-form";
import DocumentWrapper from "../../features/account/document-wrapper";

export default function Login() {
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
          <a>Terms of Service</a>
        </Link>
      </>
    );
  };

  return (
    <DocumentWrapper
      title="log is to Trello"
      meta={{
        name: "description",
        content: "This is the Log in page for Trello-Clone",
      }}
      form={<LoginForm />}
      renderAdditionalLinks={renderAdditionalLinks}
    />
  );
}
