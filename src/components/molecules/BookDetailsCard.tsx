import styles from "../../styles/BookDetails.module.scss";
import { IBookType, parseDate, renderTags } from "../../utils/helpers";
import PersonsIcon from "../atoms/vectors/PersonsIcon";
import HeartIcon from "../atoms/vectors/HeartIcon";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import CartIcon from "../atoms/vectors/CartIcon";
import Button from "../atoms/Button";

interface IProps {
  book: IBookType;
}
const BookDetailsCard = ({ book }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.bookDetailsCard}>
      <div className={styles.imgSection}>
        <img src={book.image_url} />

        <div className={styles.footer}>
          {book.available_copies > 0 ? (
            <p className={styles.availableCopies}>
              {book.available_copies} Copies Available
            </p>
          ) : (
            <p className={styles.outOfStock}>Out of stock</p>
          )}
          <p className={styles.priceTag}>${book.price}</p>
          {book.available_copies > 0 && (
            <Button
              text="Add to Cart"
              iconPosition="left"
              onClick={() => dispatch(addToCart(book, 1))}
            >
              <CartIcon />
            </Button>
          )}
        </div>
      </div>

      <div className={styles.contentSection}>
        <h5 className={styles.cardTitle}>{book.title}</h5>
        <p className={styles.publisher}>{book.publisher}</p>
        <p>{parseDate(book.release_date)} </p>

        <div className={styles.groupRow}>
          <div className={styles.row}>
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

            <div className={styles.capBox}>
              <p className={styles.capTitle}>Genre</p>
              <p>{book.genre}</p>
            </div>

            <div className={styles.capBox}>
              <p className={styles.capTitle}>Tags</p>
              <p>{renderTags(book.tags)}</p>
            </div>
            <div className={styles.capBox}>
              <p className={styles.capTitle}>Publisher</p>
              <p>{book.publisher}</p>
            </div>
            <div className={styles.capBox}>
              <p className={styles.capTitle}>Released</p>
              <p>{parseDate(book.release_date, true)}</p>
            </div>
          </div>
        </div>

        <div className={styles.capBoxesGroup}>
          <div className={styles.smCapBox}>
            <p className={styles.capTitle}>Genre</p>
            <p>{book.genre}</p>
          </div>

          <div className={styles.smCapBox}>
            <p className={styles.capTitle}>Tags</p>
            <p>{renderTags(book.tags)}</p>
          </div>
        </div>

        {book.available_copies > 0 && (
          <button
            onClick={() => dispatch(addToCart(book, 1))}
            className={styles.smAddToCartBtn}
          >
            <CartIcon size="sm" />
            <div className={styles.labelBox}>
              <p className={styles.label}> Add to Cart</p>
              <p className={styles.availableCopies}>
                {book.available_copies} Copies Available
              </p>
            </div>
            <p className={styles.priceTag}>${book.price}</p>
          </button>
        )}

        <div className={styles.contentDesc}>
          <p className={styles.subtitle}>{book.subtitle}</p>
          <div className={styles.fullDesc}>{book.full_description}</div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsCard;
