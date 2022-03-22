import React from 'react';
import SearchInput from "../atoms/SearchInput";
import Logo from "../atoms/vectors/Logo";
import CartIcon from "../atoms/vectors/CartIcon";
import LightIcon from "../atoms/vectors/LightIcon";
import styles from "../../styles/Header.module.scss";

const Header = () => {
  return (
      <div className={styles.Header}>
         <div className={styles.headerDisplay}>
            <Logo  />
          <div className={styles.appDetails}>
              <h3>
                  Quidax Books
              </h3>
              <h5>
                  A flimsy book company
                </h5>
         </div>
         </div>
         <SearchInput
          triggerSearch={() => {}} placeholder="Search books, genres, authors, etc." 
          />
         <div className={styles.actions}>
         <LightIcon />
        <div className={styles.cart}>
           <CartIcon />
          <span className={styles.badge}>3</span>

        </div>
         </div>
    </div>
  )
}

export default Header