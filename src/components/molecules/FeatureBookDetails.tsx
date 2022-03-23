import PersonsIcon from "../../components/atoms/vectors/PersonsIcon";
import StarRating from "../../components/molecules/StarRating";
import HeartIcon from "../../components/atoms/vectors/HeartIcon";
import { IBookType, parseDate, renderTags } from "../../utils/helpers";
import styles from "../../styles/Slider.module.scss";

interface IProps {
    book: IBookType;
}
const FeatureBookDetails = ({book}: IProps) => {
  return (
    <div>
      {book.available_copies > 0 && (
        <p className={styles.available}>Available</p>
      )}
      <h3 className={styles.title}>{book.title}</h3>
      <div className={styles.groupBox}>
        <p className={styles.subtitle}>{book.publisher}</p>
        <p className={styles.subtitle}>{parseDate(book.release_date)}</p>
      </div>
      <div className={styles.groupBox}>
        <p className={styles.groupTitle}>Genre</p>
        <p className={styles.subtitle}>{book.genre}</p>
      </div>
      <div className={styles.groupBox}>
        <p className={styles.groupTitle}>Tags</p>
        <p className={styles.subtitle}>{renderTags(book.tags)}</p>
      </div>

      <div className={styles.groupRow}>
        <div className={styles.box}>
          <PersonsIcon />
          <p className={styles.label}>{book.number_of_purchases}</p>
        </div>
        <div className={styles.box}>
          <HeartIcon />
          <p className={styles.label}>{book.likes}</p>
        </div>
        <div className={styles.ratingBox}>
          <p className={styles.ratingLabel}>Rating: {book.rating}</p>

          <StarRating rate={Math.round(book.rating)} />
        </div>
      </div>
    </div>
  );
}

export default FeatureBookDetails