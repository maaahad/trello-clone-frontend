// --------------------------------------------------
// import

// nextjs
import Link from "next/link";

// in-house component
import LoginForm from "../../features/account/login-form";
import DocumentWrapper from "../../features/account/document-wrapper";
import Footer from "../../features/footer";
import Links from "../../features/utilities/links";

export const quickLinks = [
  {
    label: "Templates",
    href: "/",
  },
  {
    label: "Pricing",
    href: "/",
  },
  {
    label: "Apps",
    href: "/",
  },
  {
    label: "Jobs",
    href: "/",
  },
  {
    label: "Blog",
    href: "/",
  },
  {
    label: "Developers",
    href: "/",
  },
  {
    label: "About",
    href: "/",
  },
  {
    label: "Help",
    href: "/",
  },
  {
    label: "Cookie Settings",
    href: "/",
  },
];

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
            borderRadius: "50%",
            backgroundColor: "#4d4d4d",
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
      title="Login to Trello"
      meta={{
        name: "description",
        content: "This is the Login page for Trello-Clone",
      }}
      form={<LoginForm />}
      renderAdditionalLinks={renderAdditionalLinks}
      footer={<Footer renderFooterBottom={<Links links={quickLinks} />} />}
    />
  );
}
