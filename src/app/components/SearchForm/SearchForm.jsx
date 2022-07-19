import React from "react";
import SearchIcon from "../Svg/SearchIcon";

const SearchForm = () => {
    return(
        <form className="search-form">
            <input type="search" className="search-form__search-input"/>
            <input type="submit" className="search-form__submit-input"/>
            <div className="search-form__search-icon-wrap">
                <SearchIcon className="search-form__search-icon" />
            </div>
        </form>
    )
}

export default SearchForm;
