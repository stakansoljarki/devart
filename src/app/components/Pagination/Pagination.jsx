import React from 'react';

const Pagination = () => (
  <div className="pagination">
    <button type="button" className="pagination__button pagination__button--prev">
      <i className="pagination__button-arrow" />
    </button>
    <span className="pagination__page">01/12</span>
    <button type="button" className="pagination__button pagination__button--next">
      <i className="pagination__button-arrow" />
    </button>
  </div>
);

export default Pagination;
