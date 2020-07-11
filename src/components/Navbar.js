import React, { useState, useEffect } from "react";
import Cookies from "universal-cookie";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUserAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

const Navbar = () => {
  const [profilePicUrl, setProfilePic] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const cookies = new Cookies();

  const fetchProfilePic = () => {
    const user = cookies.get("githubUser");
    axios
      .get("https://api.github.com/users/" + user)
      .then(function (response) {
        setProfilePic(response.data.avatar_url);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const printProfilePic = () => {
    if (loading) {
      return null;
    } else if (profilePicUrl !== undefined) {
      return (
        <img
          src={profilePicUrl}
          className="ml-2 rounded-circle profile-pic"
          alt="profile pic"
        />
      );
    } else {
      return <FontAwesomeIcon icon={faUserAlt} className="ml-2" alt="" />;
    }
  };
  useEffect(() => {
    fetchProfilePic();
  }, []);
  return (
    <div className=" ">
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
          className="profile-btn"
          data-toggle="collapse"
          data-target="#userInfo"
          aria-controls="userInfo"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {cookies.get("userName")}
          {printProfilePic()}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
