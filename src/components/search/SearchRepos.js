import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

const SearchRepo = ({ repos, setRepos, setCurrentPage, initialData }) => {
  const initialRepos = initialData;

  const filterRepos = (event) => {
    const value = event.currentTarget.value;
    if (value.length >= 2) {
      setRepos(
        repos.filter((repo) => {
          return repo.name.toLowerCase().includes(value.toLowerCase());
        })
      );
      setCurrentPage(repos.slice(0, 5));
    }
    if (value.length <= 1 || value === "") {
      console.log(initialRepos);
      setRepos(initialRepos);
      setCurrentPage(repos.slice(0, 5));
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      filterRepos(event);
    }
  };
  return (
    <form
      className="search-repo"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="input-group mb-3">
        <div className="input-group-prepend mb-0">
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
          onKeyPress={handleKeyPress}
        />
      </div>
    </form>
  );
};

export default SearchRepo;
