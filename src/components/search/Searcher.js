import React, { useEffect } from "react";
import Navbar from "../Navbar";
import SearchBar from "./SearchBar";
import ResposContainer from "./ReposContainer";
import axios from "axios";

const Searcher = () => {
  const searchUser = () => {};
  return (
    <div className="container-fluid">
      <div className="row">
        <Navbar />
      </div>
      <div className="container search-container">
        <SearchBar />
        <ResposContainer />
      </div>
    </div>
  );
};

export default Searcher;
