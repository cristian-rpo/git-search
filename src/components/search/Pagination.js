import React from "react";

const Pagination = ({ length, perPage, action }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="..." className="pagination-container">
      <ul className="pagination-sm  pagination">
        {pageNumbers.map((number, index) => {
          return (
            <li
              className="page-item"
              aria-current="page"
              key={index}
              onClick={action}
              id={index}
            >
              <span className="page-link">{number}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Pagination;
