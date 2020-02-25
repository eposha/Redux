import React from "react";

const Pagination = ({
  goNextPage,
  goPrevPage,
  currentPage,
  totalItems,
  itemsPerPage
}) => {
  const currentPageNum = currentPage + 1;

  const isLastPage =
    itemsPerPage < 3 || currentPageNum === totalItems ? true : false;
  const isFirstPage = currentPageNum === 1 ? true : false;

  return (
    <div className="pagination">
      <button className="btn" onClick={goPrevPage} disabled={isFirstPage}>
        {isFirstPage ? "" : "←"}
      </button>
      <span className="pagination__page">{currentPageNum}</span>
      <button className="btn" onClick={goNextPage} disabled={isLastPage}>
        {isLastPage ? "" : "→"}
      </button>
    </div>
  );
};

export default Pagination;
