import styles from "../../styles/SearchBookListing.module.scss";
import BookCard from "../molecules/BookCard";
import Link from "next/link";
import SectionHeader from "../molecules/SectionHeader";
import { useDispatch } from "react-redux";
import { closeSearchModal } from "../../redux/actions/searchActions";

interface IProps {
  searchText: string;
  bookList?: any[];
}

const SearchBookListing = ({searchText = "", bookList = []}: IProps) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.SearchBookListing}>
      <SectionHeader
        title={`${bookList?.length} results found for '${searchText}'`}
      />

      <div className={styles.container}>
        {bookList.map((book, bookIndex) => (
          <Link
            href="/[book]"
            as={`/${book.id}`}
            key={`search_item-${bookIndex}`}
          >
            <a onClick={() => dispatch(closeSearchModal())}>
              <BookCard book={book} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SearchBookListing