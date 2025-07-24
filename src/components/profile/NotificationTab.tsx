import React from "react";
import NotificationMsgBox from "./notifications/NotificationMsgBox";

function NotificationTab() {
  return (
    <>
      <div className="flex h-full w-full overflow-hidden min-[1440px]:!ml-0 xl:ml-5">
        <NotificationMsgBox />
      </div>
    </>
  );
}

export default NotificationTab;
