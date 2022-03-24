import { useState } from "react";
import SearchInput from "../atoms/SearchInput";
import Logo from "../atoms/vectors/Logo";
import SearchIcon from "../atoms/vectors/SearchIcon";
import CartIcon from "../atoms/vectors/CartIcon";
import LightIcon from "../atoms/vectors/LightIcon";
import BackIcon from "../atoms/vectors/BackIcon";
import styles from "../../styles/Header.module.scss";
import { useSelector } from "react-redux";
import { IReduxState } from "../../redux/actions/types";
import Cart from "./Cart";

const Header = () => {
  const { cart, searcher } = useSelector((state: IReduxState) => state);
  const { cartItems } = cart;
  const { search } = searcher;
  const [openCart, setOpenCart] = useState<boolean>(false);

  const [openMobileSearchBar, setOpenMobileSearchBar] = useState<boolean>(false)

  return (
    <header className={styles.Header}>
      <div className={styles.headerDisplay}>
        <Logo size="sm" className={styles.smLogo} />
        <Logo size="md" className={styles.mdLogo} />
        <div className={styles.appDetails}>
          <h3>Quidax Books</h3>
          <h5>A flimsy book company</h5>
        </div>
      </div>
      <div className={styles.searchBar}>
        <SearchInput
          value={search}
          placeholder="Search books, genres, authors, etc."
        />
      </div>
      <div className={styles.actions}>
        <button onClick={() => setOpenMobileSearchBar(true)}>
        <SearchIcon className={styles.searchIcon} />
        </button>
        <LightIcon size="sm" className={styles.smLogo} />
        <LightIcon size="md" className={styles.mdLogo} />
        <button onClick={() => setOpenCart(true)} className={styles.cart}>
          <CartIcon />
          <span className={styles.badge}>{cartItems.length}</span>
        </button>
      </div>
      {
        openMobileSearchBar && <div className={styles.mobileSearchNav}> 
          <button
          onClick={() => setOpenMobileSearchBar(false)}
           className={styles.backArrow}><BackIcon />
          </button>
           <SearchInput
          value={search}
          placeholder="Search books, genres, authors, etc."
        />
        </div>
}
      <div className={openCart ? styles.cartModal : styles.hideModal}>
        <Cart close={() => setOpenCart(false)} />
      </div>
      {openCart && <div className={styles.cartOverlay}></div>}
    </header>
  );
};

export default Header;
