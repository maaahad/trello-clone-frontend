// --------------------------------------------------
// import

import SignupForm from "../../features/account/signup-form";
import DocumentWrapper from "../../features/account/document-wrapper";

export default function Signup() {
  return (
    <DocumentWrapper
      title="Signup to Trello-Clone"
      meta={{
        name: "description",
        content: "This is the signup to Trello-Clone",
      }}
      form={<SignupForm />}
    />
  );
}
