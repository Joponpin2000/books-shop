import { useState } from "react";
import SearchInput from "../atoms/SearchInput";
import Logo from "../atoms/vectors/Logo";
import CartIcon from "../atoms/vectors/CartIcon";
import LightIcon from "../atoms/vectors/LightIcon";
import styles from "../../styles/Header.module.scss";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import { IReduxState } from '../../redux/reducers/cartReducer';
interface IProps {
  search?: string;
  setSearch:  (search: string) => void;
  triggerSearch: (search: string) => void;
  searchActionHandler: Function;
}

const Header = ({
   search = "",
    setSearch = () => { },
     triggerSearch = () => { },
  searchActionHandler = () => { }
}: IProps) => {
    const { cartItems } = useSelector((state: IReduxState) => state);
  const [openCart, setOpenCart] = useState<boolean>(false);

  return (
    <header className={styles.Header}>
      <div className={styles.headerDisplay}>
        <Logo />
        <div className={styles.appDetails}>
          <h3>Quidax Books</h3>
          <h5>A flimsy book company</h5>
        </div>
      </div>
      <SearchInput
        value={search}
        onChange={setSearch}
        actionHandler={searchActionHandler}
        triggerSearch={triggerSearch}
        placeholder="Search books, genres, authors, etc."
      />
      <div className={styles.actions}>
        <LightIcon />
        <div onClick={() => setOpenCart(true)} className={styles.cart}>
          <CartIcon />
          <span className={styles.badge}>{cartItems.length}</span>
        </div>
      </div>

      <div className={openCart ? styles.cartModal : styles.hideModal}>
        <Cart close={() => setOpenCart(false)} />
      </div>
      {openCart && <div className={styles.cartOverlay}></div>}
    </header>
  );
};

export default Header