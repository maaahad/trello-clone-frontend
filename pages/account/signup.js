// --------------------------------------------------
// import

import AccountTemplate from "../../features/account/account-template";
import SignupTrello from "../../features/account/signup-trello";

export default function LggingOut() {
  return (
    <AccountTemplate
      title="Signup to Trello-Clone"
      meta={{
        name: "description",
        content: "This is the signup to Trello-Clone",
      }}
      renderContent={<SignupTrello />}
    />
  );
}
