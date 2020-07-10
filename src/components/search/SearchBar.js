import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchBar = ({ action }) => {
  return (
    <form className="search-bar">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="GitHub User"
          aria-label="GitHub User"
          aria-describedby="button-addon2"
          id="searchUser"
          defaultValue="cristian-rpo"
        />
        <div className="input-group-append">
          <button
            className="btn btn-outline-dark"
            type="button"
            id="button-addon2"
            onClick={action}
          >
            Search
            <FontAwesomeIcon icon={faSearch} className="ml-2" />
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchBar;
