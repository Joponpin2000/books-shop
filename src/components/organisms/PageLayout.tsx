import { ReactNode } from "react"
import { useState, useEffect } from "react";
import Header from "../../components/organisms/Header";
import { useSelector } from "react-redux";
import SearchBookListing from "../../components/organisms/SearchBookListing";
import bookList from "../../utils/data.json";
import styles from "../../styles/PageLayout.module.scss";
import { IReduxState } from "../../redux/actions/types";

interface IProps {
    children?: ReactNode;
}
const PageLayout = ({children}: IProps) => {

   const { search, isSearchModalOpen } = useSelector(
     (state: IReduxState) => state.searcher
   );

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
      <Header />

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
    </div>
  );
}

export default PageLayout