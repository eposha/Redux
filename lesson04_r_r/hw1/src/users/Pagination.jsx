import React from "react";

const Pagination = ({
  goNextPage,
  goPrevPage,
  currentPage,
  totalItems,
  itemsPerPage
}) => {
  const isLastPage =
    itemsPerPage < 3 || currentPage === totalItems ? true : false;
  const isFirstPage = currentPage === 1 ? true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrevPage} disabled={isFirstPage}>
        {isFirstPage ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPage}</span>
      <button className="btn" onClick={goNextPage} disabled={isLastPage}>
        {isLastPage ? "" : "→"}
      </button>
    </div>
  );
};

export default Pagination;
