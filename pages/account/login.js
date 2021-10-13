// --------------------------------------------------
// import

import AccountTemplate from "../../features/account/account-template";
import LoginTrello from "../../features/account/login-trello";

export default function LggingOut() {
  return (
    <AccountTemplate
      title="log is to Trello"
      meta={{
        name: "description",
        content: "This is the Log in page for Trello-Clone",
      }}
      renderContent={<LoginTrello />}
    />
  );
}
