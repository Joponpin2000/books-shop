import React, {FormEvent} from "react";
import CloseIcon from "./vectors/CloseIcon";
import SearchIcon from "./vectors/SearchIcon";
import styles from "../../styles/SearchInput.module.scss"

interface IProps {
  value?: string;
  placeholder?: string;
  onChange?: Function;
  triggerSearch: (search: string) => void;
 actionHandler: Function;
}
function SearchInput({
    value = "",
    actionHandler = () => {},
  placeholder,
  onChange = () => {},
  triggerSearch = () => {},
}: IProps) {


  const handleSubmit = (e: FormEvent) => {

    e.preventDefault();
    
    triggerSearch(value);
    
  };

  return (
      <form
        className={styles.SearchInput}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            if (e.target.value !== '') {
                actionHandler('search')
            }else{
              actionHandler('cancel')
            }
            onChange(e.target.value);
          }}
       
         
        />
      <span className={styles.searchIcon} onClick={() => value !== '' ? actionHandler("cancel") : () => { }}>
         {value ?<CloseIcon/> : <SearchIcon />}
       </span>
        
      </form>
  );
}

export default SearchInput;
