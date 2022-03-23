import React, { FormEvent } from "react";
import CloseIcon from "./vectors/CloseIcon";
import SearchIcon from "./vectors/SearchIcon";
import {
  closeSearchModal,
  openSearchModal,
  setSearch,
} from "../../redux/actions/searchActions";
import styles from "../../styles/SearchInput.module.scss";
import { useDispatch } from "react-redux";

interface IProps {
  value?: string;
  placeholder?: string;
}
function SearchInput({ value = "", placeholder }: IProps) {
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className={styles.SearchInput} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          if (e.target.value !== "") {
            dispatch(setSearch(e.target.value));
            dispatch(openSearchModal());
          } else {
            dispatch(closeSearchModal());
          }
        }}
      />
      <span
        className={styles.searchIcon}
        onClick={() => (value !== "" ? dispatch(closeSearchModal()) : () => {})}
      >
        {value ? <CloseIcon /> : <SearchIcon />}
      </span>
    </form>
  );
}

export default SearchInput;
