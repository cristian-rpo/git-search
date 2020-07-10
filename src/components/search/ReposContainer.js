import React, { useState } from "react";
import Pagination from "./Pagination";
import SearchRepos from "./SearchRepos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import sortOn from "sort-on";

const ReposContainer = ({ data }) => {
  const [repos, setRepos] = useState(data);
  const [pageNumber, setPageNumber] = useState(0);
  const [currentPage, setCurrentPage] = useState(repos.slice(0, 5));
  const [currentSort, setCurrentSort] = useState("Name");
  const heads = ["Name", "Language", "Description", "Default Branch", "Url"];

  const updateCurrentPage = (event) => {
    const currentPage = event.currentTarget.id;
    const index = currentPage * 5;
    setPageNumber(currentPage);
    setCurrentPage(repos.slice(index, index + 5));
  };

  const sortBy = (event) => {
    const target = event.currentTarget.id;
    let value = "";
    switch (target) {
      case "Name":
        value = "name";
        break;
      case "Language":
        value = "language";
        break;
      case "Description":
        value = "description";
        break;
      case "Default Branch":
        value = "default_branch";
        break;
      case "Url":
        value = "html_url";
        break;
      default:
        break;
    }
    currentSort === target
      ? setRepos(repos.reverse())
      : setRepos(sortOn(repos, value));
    setCurrentSort(target);
    setCurrentPage(repos.slice(0, 5));
  };

  return (
    <div className="table-responsive">
      <SearchRepos
        repos={repos}
        setRepos={setRepos}
        setCurrentPage={setCurrentPage}
      />
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {heads.map((head, index) => {
              return (
                <th scope="col" key={index}>
                  {head}
                  <FontAwesomeIcon icon={faSort} onClick={sortBy} id={head} />
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {currentPage.map((repo, index) => {
            return (
              <tr key={index}>
                <th scope="row">{repo.name}</th>
                <td>{repo.language}</td>
                <td>{repo.description}</td>
                <td>{repo.default_branch}</td>
                <td>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Watch
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        length={repos.length}
        perPage={5}
        action={updateCurrentPage}
        page={pageNumber}
      />
    </div>
  );
};

export default ReposContainer;
