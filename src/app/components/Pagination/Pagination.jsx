import React from "react";

const Pagination = () => {
    return(
        <div className="pagination">
            <button className="pagination__button pagination__button--prev">
                <i className="pagination__button-arrow"></i>
            </button>
            <span className="pagination__page">01/12</span>
            <button className="pagination__button pagination__button--next">
                <i className="pagination__button-arrow"></i>
            </button>
        </div>
    )
}

export default Pagination;
