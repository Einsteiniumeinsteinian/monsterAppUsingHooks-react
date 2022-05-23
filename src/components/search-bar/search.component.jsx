// import React, { Component } from "react";
import './search.styles.css'

const SearchBar = ({onChangeHandler, placeholder, className}) => {
return (
    <div>
    <input 
    className={`search-bar ${className}`}
    type={'search'}
    placeholder={placeholder}
    onChange={onChangeHandler} />
</div>
)
}


export default SearchBar