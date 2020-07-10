import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchRepo = ({ repos, setRepos, setCurrentPage }) => {
  const initialRepos = repos;
  const filterRepos = (event) => {
    const value = event.currentTarget.value;
    if (value.length > 2) {
      setRepos(
        repos.filter((repo) => {
          return repo.name.toLowerCase().includes(value.toLowerCase());
        })
      );
      setCurrentPage(repos.slice(0, 5));
      console.log("filtrado");
    }
    if (value.length < 2 || value === "") {
      console.log(initialRepos);
      setRepos(initialRepos);
      setCurrentPage(repos.slice(0, 5));
    }
  };
  return (
    <form className="search-repo">
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            <FontAwesomeIcon icon={faFilter} className="ml-2" />
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Find a repository..."
          aria-label="Find a repository..."
          aria-describedby="button-addon2"
          id="searchRepo"
          onChange={filterRepos}
        />
      </div>
    </form>
  );
};

export default SearchRepo;
