import { ReactNode } from "react"
import { useState, useEffect } from "react";
import Header from "../../components/organisms/Header";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SearchBookListing from "../../components/organisms/SearchBookListing";
import bookList from "../../utils/books.json";
import Cart from "./Cart";
import styles from "../../styles/PageLayout.module.scss";
import { IReduxState } from "../../redux/actions/types";
import { setCartModal } from "../../redux/actions/cartActions";

interface IProps {
    children?: ReactNode;
}
const PageLayout = ({children}: IProps) => {

  const dispatch = useDispatch();
  
   const {cart, searcher} = useSelector(
     (state: IReduxState) => state
   );
  const {  isCartModalOpen } = cart;
   const { search, isSearchModalOpen } = searcher;
  const [searchList, setSearchList] = useState<any[]>([]);

  const handleSearch = (value: string) => {
    const list = bookList.data.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setSearchList(list);
  };

  useEffect(() => {
   handleSearch(search);

    return (() => {
      setSearchList([]);
    })
  }, [search])
  return (
    <div className={styles.PageLayout}>
      <Header  />

      <div className={styles.SectionSearchWrapper}>
        <section>
          {!isSearchModalOpen && (
           children
          )}
        </section>
        <div
          className={isSearchModalOpen ? styles.searchModal : styles.hideSearch}
        >
          <SearchBookListing searchText={search} bookList={searchList} />
        </div>
      </div>
       <div className={isCartModalOpen ? styles.cartModal : styles.hideModal}>
        <Cart close={() =>  dispatch(setCartModal((false)))} />
      </div>
      {isCartModalOpen && <div className={styles.cartOverlay}></div>}
    </div>
  );
}

export default PageLayout