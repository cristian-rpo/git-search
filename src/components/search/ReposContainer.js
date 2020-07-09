import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

const ReposContainer = ({ data }) => {
  const [repos, setRepos] = useState(data);
  const [currentPage, setCurrentPage] = useState(repos.slice(0, 5));

  const updateCurrentPage = (event) => {
    const index = event.currentTarget.id * 5;
    setCurrentPage(repos.slice(index, index + 5));
  };
  return (
    <div className="table-responsive">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Language</th>
            <th scope="col">Description</th>
            <th scope="col">Default Branch</th>
            <th scope="col">Url</th>
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
                    Visit
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
      />
    </div>
  );
};

export default ReposContainer;
