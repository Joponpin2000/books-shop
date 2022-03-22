import React, { useState } from "react";
import SearchIcon from "./vectors/SearchIcon";
import styles from "../../styles/SearchInput.module.scss"

interface PropTypes {
  value?: string;
  placeholder?: string;
  onChange?: Function;
  triggerSearch: (search: string) => void;
}

function SearchInput({
  placeholder,
  value,
  onChange = () => {},
  triggerSearch = () => {},
}: PropTypes) {

  const handleSubmit = (e: any) => {
    e.preventDefault();
    triggerSearch(value);
  };

  return (
      <form
        className={styles.SearchInput}
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (e.target.value === "") triggerSearch(value ?? "");
            onChange(e.target.value);
          }}
         
        />
       <span className={styles.searchIcon}>
          <SearchIcon />
       </span>
      </form>
  );
}

export default SearchInput;
