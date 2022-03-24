import SectionHeader from "../molecules/SectionHeader";
import BookCard from "../molecules/BookCard";
import bookList from "../../utils/data.json";
import styles from "../../styles/BookListingSection.module.scss";
import Link from "next/link";

const BookListingSection = () => {
  return (
    <div className={styles.BookListingSection}>
      <SectionHeader title="All Books" />

      <div className={styles.container}>
        {bookList.data.map((book, bookIndex) => (
          <Link
            href="/[book]"
            as={`/${book.id}`}
            key={`book_item-${bookIndex}`}
          >
            <a>
              <BookCard book={book} />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BookListingSection;
