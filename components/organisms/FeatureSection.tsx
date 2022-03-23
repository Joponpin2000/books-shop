
import SectionHeader from "../molecules/SectionHeader";
import BookCarousel from "../organisms/BookCarousel";
import bookList from "../../utils/data.json";
import styles from "../../styles/FeatureSection.module.scss";

const FeatureSection = () => {

    return (
        <div className={styles.FeatureSection}>
            <SectionHeader title="Featured Books" />
            <BookCarousel  books={bookList.data.filter(book => book.featured)} />
        </div>
    )
}

export default FeatureSection;