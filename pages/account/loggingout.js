// --------------------------------------------------
// import

import AccountTemplate from "../../features/account/account-template";
import LoggingoutConfirmation from "../../features/account/loggingout-confirmation";

export default function LggingOut() {
  return (
    <AccountTemplate
      title="logging out from Trello"
      meta={{
        name: "description",
        content: "This is the Loging out page for Trello-Clone",
      }}
      renderContent={<LoggingoutConfirmation />}
    />
  );
}
