import React from "react";

const PaginationComponent = ({ goToPreviousPage, renderPaginationButtons, goToNextPage }) => {
  return (
    <div className="container-pagination">
      <button className="btn-control btn-previous" onClick={goToPreviousPage}>
        Previous
      </button>
      <div className="page-pagination">{renderPaginationButtons()}</div>
      <button className="btn-control btn-next" onClick={goToNextPage}>
        Next
      </button>
    </div>
  );
};

export default PaginationComponent;
