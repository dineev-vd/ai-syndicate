import React, { Dispatch, SetStateAction, useEffect, useMemo } from "react";
import "./Paginator.scss";

interface PaginatorProps {
  activePage: number;
  setActivePage: Dispatch<SetStateAction<number>>;
  maxPages: number;
}

const Paginator: React.FC<PaginatorProps> = ({
  activePage,
  maxPages,
  setActivePage,
}) => {
  const array = useMemo(() => {
    let temp = [1];

    temp = [
      ...temp,
      ...[activePage - 1, activePage, activePage + 1].filter(
        (a) => a < maxPages && a > 1
      ),
    ];

    if (maxPages >= 2) {
      temp = [...temp, maxPages];
    }

    return temp;
  }, [maxPages, activePage]);

  return (
    <div className="paginator">
      <i
        onClick={() => setActivePage((prev) => Math.max(prev - 1, 1))}
        className={`bi bi-chevron-left ${
          activePage === 1 ? "paginator__inactive" : ""
        }`}
      ></i>
      {array.map((page, index, array) =>
        index > 0 && array[index] - array[index - 1] > 1 ? (
          <React.Fragment key={index}>
            <i
              className="bi bi-three-dots paginator__dots"
            ></i>
            <div
              onClick={() => setActivePage(page)}
              className={page === activePage ? "paginator__active-page" : ""}
            >
              {page}
            </div>
          </React.Fragment>
        ) : (
          <div
            key={index}
            onClick={() => setActivePage(page)}
            className={page === activePage ? "paginator__active-page" : ""}
          >
            {page}
          </div>
        )
      )}
      <i
        onClick={() => setActivePage((prev) => Math.min(prev + 1, maxPages))}
        className={`bi bi-chevron-right ${
          activePage === maxPages ? "paginator__inactive" : ""
        }`}
      ></i>
    </div>
  );
};

export default Paginator;
