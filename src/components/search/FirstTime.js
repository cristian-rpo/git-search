import React from "react";
import FirstImg from "../../img/first-time.png";

const FirstTime = () => {
  return (
    <div className="first-time">
      <img className="first-img" src={FirstImg} alt="first time logo" />
      Find the repositories of any user!
    </div>
  );
};

export default FirstTime;
