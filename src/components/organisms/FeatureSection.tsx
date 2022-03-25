
import SectionHeader from "../molecules/SectionHeader";
import BookCarousel from "./BookCarousel";
import bookList from "../../utils/books.json";
import styles from "../../styles/FeatureSection.module.scss";

const FeatureSection = () => {

    return (
      <div className={styles.FeatureSection}>
        <SectionHeader title="Featured Books" />
        <BookCarousel
          device="laptop"
          books={bookList.data.filter((book) => book.featured)}
        />
        <BookCarousel
          device="mobile"
          books={bookList.data.filter((book) => book.featured)}
        />
        <BookCarousel
          device="tablet"
          books={bookList.data.filter((book) => book.featured)}
        />
      </div>
    );
}

export default FeatureSection;