
import SectionHeader from "../molecules/SectionHeader";
import BookCard from "../molecules/BookCard";
import bookList from "../../utils/data.json";
import styles from "../../styles/BookListingSection.module.scss";


const BookListingSection = () => {
    return (
        <div className={styles.BookListingSection}>
           
        <SectionHeader title="All Books"  />

        <div className={styles.container}>
            {bookList.data.map((book, bookIndex) => (
                <BookCard book={book} key={`book_item-${bookIndex}`} />
            ))}
        </div>
           
        </div>
    )
}

export default BookListingSection;
