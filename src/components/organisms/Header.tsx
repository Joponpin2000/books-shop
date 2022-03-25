import { useState } from "react";
import SearchInput from "../atoms/SearchInput";
import { useDispatch } from "react-redux";
import Logo from "../atoms/vectors/Logo";
import SearchIcon from "../atoms/vectors/SearchIcon";
import CartIcon from "../atoms/vectors/CartIcon";
import LightIcon from "../atoms/vectors/LightIcon";
import BackIcon from "../atoms/vectors/BackIcon";
import styles from "../../styles/Header.module.scss";
import { useSelector } from "react-redux";
import { IReduxState } from "../../redux/actions/types";
import Cart from "./Cart";
import { setCartModal } from "../../redux/actions/cartActions";
import { closeSearchModal } from "../../redux/actions/searchActions";
import Link from "next/link";

const Header = () => {
  const dispatch = useDispatch();
  const { cart, searcher } = useSelector((state: IReduxState) => state);
  const { cartItems } = cart;
  const { search,isSearchModalOpen } = searcher;

  const [openMobileSearchBar, setOpenMobileSearchBar] = useState<boolean>(false)

  return (
    <header className={styles.Header}>
      <Link href="/">
        <a>
          <div className={styles.headerDisplay}>
            <Logo size="sm" className={styles.smLogo} />
            <Logo size="md" className={styles.mdLogo} />
            <div className={styles.appDetails}>
              <h3>Quidax Books</h3>
              <h5>A flimsy book company</h5>
            </div>
          </div>
        </a>
      </Link>
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
        <Link href="/">
          <a>
            {" "}
            <LightIcon size="sm" className={styles.smLogo} />
            <LightIcon size="md" className={styles.mdLogo} />
          </a>
        </Link>
        <button
          onClick={() => dispatch(setCartModal(true))}
          className={styles.cart}
        >
          <CartIcon />
          <span className={styles.badge}>{cartItems?.length}</span>
        </button>
      </div>

      <div
        className={
          openMobileSearchBar
            ? styles.mobileSearchNav
            : styles.hideMobileSearchNav
        }
      >
        <button
          onClick={() => {
            dispatch(closeSearchModal());
            setOpenMobileSearchBar(false);
          }}
          className={styles.backArrow}
        >
          <BackIcon />
        </button>
        <SearchInput
          value={search}
          placeholder="Search books, genres, authors, etc."
        />
      </div>

      {!isSearchModalOpen && openMobileSearchBar && (
        <div className={styles.searchOverlay}></div>
      )}
    </header>
  );
};

export default Header;
