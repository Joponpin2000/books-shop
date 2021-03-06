import PersonsIcon from "../atoms/vectors/PersonsIcon";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import StarRating from "./StarRating";
import HeartIcon from "../atoms/vectors/HeartIcon";
import { IBookType, parseDate, renderTags } from "../../utils/helpers";
import styles from "../../styles/BookCard.module.scss";
import CartIcon from "../atoms/vectors/CartIcon";

interface IProps {
  book: IBookType;
}

const BookCard = ({ book }: IProps) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.BookCard}>
      <div className={styles.cardImg}>
        <img src={book.image_url}
          width="100%"
          height="100%"
        />
      </div>

      <div className={styles.cardDetails}>
        <h5 className={styles.cardTitle}>{book.title}</h5>
        <p>
          {book.publisher} - {parseDate(book.release_date)}
        </p>
        <p className={styles.tags}> {renderTags(book.tags)} </p>

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
        </div>

        <div className={styles.row}>
          <span className={styles.priceTag}>${book.price}</span>
          {book.available_copies > 0 ? (
            <p className={styles.availableCopies}>
              {book.available_copies} Copies Available
            </p>
          ) : (
            <p className={styles.outOfStock}>Out of stock</p>
          )}
        </div>
        {book.available_copies > 0 && (
          <button
            onClick={(e) => {
              e.preventDefault();
              dispatch(addToCart(book, 1))
            }}
            className={styles.addToCart}
          >
            <CartIcon size="sm" />
            <p>Add to Cart</p>
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCard;
