import React from "react";
import LiveUserSearch from "./LiveUserSearch";
import { ReactComponent as NotFoundLogo } from "../../img/not-found.svg";
const NotFound = () => {
  return (
    <div className="not-found">
      <LiveUserSearch
        input={document.getElementById("searchUser").value.slice(0, 3)}
      />
      <NotFoundLogo className="not-found-logo" />
      <p>User not found</p>
    </div>
  );
};

export default NotFound;
