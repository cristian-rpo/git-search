import React, { useState } from "react";
import Navbar from "../Navbar";
import SearchBar from "./SearchBar";
import ReposContainer from "./ReposContainer";
import Loading from "./Loading";
import NotFound from "./NotFound";
import FirstTime from "./FirstTime";
import axios from "axios";

const Searcher = () => {
  const [loading, setLoading] = useState(false);
  const [userRepos, setUserRepos] = useState(undefined);
  const searchUser = () => {
    setLoading(true);
    const user = document.getElementById("searchUser").value;
    axios
      .get("https://api.github.com/users/" + user + "/repos")
      .then((response) => {
        setUserRepos(response.data);
      })
      .catch((error) => {
        setUserRepos(null);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="container search-container">
        <SearchBar action={searchUser} />
        {loading ? (
          <Loading />
        ) : userRepos === undefined ? (
          <FirstTime />
        ) : userRepos === null ? (
          <NotFound />
        ) : (
          <ReposContainer data={userRepos} />
        )}
      </div>
    </div>
  );
};

export default Searcher;
