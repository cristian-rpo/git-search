import React, { useState, useEffect } from "react";
import axios from "axios";

const RepoUserProfile = ({ input }) => {
  const [loading, setLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const { avatar_url, bio, name, public_repos, followers } = userData;

  const fetchData = () => {
    if (input.length > 2) {
      axios
        .get("https://api.github.com/users/" + input)
        .then(function (response) {
          setUserData(response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return null;
  }
  return (
    <div className="user-card-container">
      <img src={avatar_url} alt="user-avatar" className="img-fluid user-pic" />
      <div className="description">
        <p className="name">{name}</p>
        {bio !== "" ? <p className="bio">{bio}</p> : null}
        <p className="repos">Repos: {public_repos}</p>
        <p className="followers">Followers: {followers}</p>
      </div>
    </div>
  );
};

export default RepoUserProfile;
