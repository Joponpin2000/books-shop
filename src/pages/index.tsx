import type { NextPage } from "next";
import { useState,  useEffect} from "react";
import Header from "../components/organisms/Header";
import {  useSelector } from "react-redux";
import FeatureSection from "../components/organisms/FeatureSection";
import BookListingSection from "../components/organisms/BookListingSection";
import SearchBookListing from "../components/organisms/SearchBookListing";
import bookList from "../utils/data.json";
import styles from "../styles/Home.module.scss";
import { IReduxState } from "../redux/actions/types";

const Home: NextPage = () => {
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
    <div className={styles.Home}>
      <Header
       
      />

      <div className={styles.SectionSearchWrapper}>
        <section>
          {!isSearchModalOpen && (
            <>
              <FeatureSection />
              <BookListingSection />
            </>
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
};

export default Home;
