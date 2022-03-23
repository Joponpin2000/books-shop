import { useState } from 'react';
import styles from '../../styles/Home.module.scss';
import Header from "../../components/organisms/Header";
import FeatureSection from "../../components/organisms/FeatureSection";
import BookListingSection from "../../components/organisms/BookListingSection";
import SearchBookListing from "../../components/organisms/SearchBookListing";
import bookList from "../../utils/data.json"

const HomeView = () => {

      const [search, setSearch] = useState<string>("");
      const [openSearch, setOpenSearch] = useState<boolean>(false);

      const [searchList, setSearchList] = useState<any[]>([]);

      const handleSearchAction = (action: "search" | "cancel", value = search) => {
        if (action === "search") {
          setOpenSearch(true);
          handleSearch(value);
        }
        if (action === "cancel") {
          setOpenSearch(false);
          setSearch("")
        }
      };

  const handleSearch = (value: string) => { 
    const list = bookList.data.filter(book => book.title.toLowerCase().includes(value.toLowerCase()));
    setSearchList(list);
  };
  
  return (
    <div className={styles.Home}>
      <Header
        search={search}
        setSearch={setSearch}
        searchActionHandler={handleSearchAction}
        triggerSearch={() => {}}
      />
     
      <div className={styles.SectionSearchWrapper}>

      <section>
        {!openSearch && (
          <>
            <FeatureSection />
            <BookListingSection />
          </>
        )}
      </section>
       <div className={openSearch ? styles.searchModal : styles.hideSearch}>
        <SearchBookListing
        searchText={search}
         bookList={searchList} />
      </div>
        </div>
    </div>
  );
}

export default HomeView