import React, { useState } from "react";
import SearchIcon from "./vectors/SearchIcon";
import styles from "../../styles/SearchInput.module.scss"

interface PropTypes {
  placeholder?: string;
  onChange?: Function;
  triggerSearch: (search: string) => void;
}

function SearchInput({
  placeholder,
  onChange = () => {},
  triggerSearch = () => {},
}: PropTypes) {

  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    triggerSearch(search);
  };

  return (
      <form
        className={styles.SearchInput}
        onSubmit={handleSubmit}
      >
        <input
          type="search"
          placeholder={placeholder}
          value={search}
          onChange={(e) => {
            if (e.target.value === "") triggerSearch(search ?? "");
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
