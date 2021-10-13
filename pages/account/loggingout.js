// --------------------------------------------------
// import

import AccountTemplate from "../../features/account/account-template";

export default function LggingOut() {
  return (
    <AccountTemplate
      title="logging out from Trello"
      meta={{
        name: "description",
        content: "This is the Loging out page for Trello-Clone",
      }}
      renderContent={<h1>Testing logging out page </h1>}
    />
  );
}
