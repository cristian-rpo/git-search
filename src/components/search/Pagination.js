import React, { useState } from "react";

const Pagination = ({ length, perPage, action }) => {
  const [current, setCurrent] = useState(1);
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(length / perPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav aria-label="...">
      <ul className="pagination pagination-sm">
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
