import styles from "../../styles/SearchBookListing.module.scss";
import BookCard from "../molecules/BookCard";
import SectionHeader from "../molecules/SectionHeader";

interface IProps {
  searchText: string;
  bookList?: any[];
}

const SearchBookListing = ({searchText = "", bookList = []}: IProps) => {
  return (
    <div className={styles.SearchBookListing}>
      <SectionHeader
        title={`${bookList.length} results found for '${searchText}'`}
      />

      <div className={styles.container}>
        {bookList.map((book, bookIndex) => (
          <BookCard book={book} key={`search_item-${bookIndex}`} />
        ))}
      </div>
    </div>
  );
};

export default SearchBookListing