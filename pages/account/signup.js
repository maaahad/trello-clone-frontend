// --------------------------------------------------
// import

import SignupForm from "../../features/account/signup-form";
import DocumentWrapper from "../../features/account/document-wrapper";
import Footer from "../../features/footer";
import Links from "../../features/utilities/links";

import { quickLinks } from "./login";

export default function Signup() {
  return (
    <DocumentWrapper
      title="Signup to Trello-Clone"
      meta={{
        name: "description",
        content: "This is the signup to Trello-Clone",
      }}
      form={<SignupForm />}
      footer={<Footer renderFooterBottom={<Links links={quickLinks} />} />}
    />
  );
}
