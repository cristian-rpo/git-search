import React from "react";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const cookies = new Cookies();
  return (
    <div className="pos-f-t fixed-top ">
      <div className="collapse" id="userInfo">
        <div className="bg-dark p-4">
          <h4 className="text-white">
            {`${cookies.get("userName")} ${cookies.get("userLastName")}`}
          </h4>
          <p className="text-muted m-0">ID: {cookies.get("userDocument")}</p>
          <p className="text-muted m-0">Email: {cookies.get("userMail")}</p>
          <p className="text-muted m-0">Birthday: {cookies.get("userBirth")}</p>
          <p className="text-muted m-0">Github: {cookies.get("githubUser")}</p>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-dark justify-content-between">
        <div className="navbar-brand">
          <FontAwesomeIcon icon={faGithub} className="mr-2" alt="" />
          GitSearch
        </div>
        <div
          className="btn btn-light"
          data-toggle="collapse"
          data-target="#userInfo"
          aria-controls="userInfo"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {cookies.get("userName")}
          <FontAwesomeIcon icon={faUserAlt} className="ml-2" />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
