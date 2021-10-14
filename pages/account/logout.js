// --------------------------------------------------
// import

import AccountTemplate from "../../features/account/account-template";
import LogoutConfirmation from "../../features/account/logout-confirmation";

export default function Logout() {
  return (
    <AccountTemplate
      title="logging out from Trello"
      meta={{
        name: "description",
        content: "This is the Loging out page for Trello-Clone",
      }}
      renderContent={<LogoutConfirmation />}
      logout={true}
    />
  );
}
