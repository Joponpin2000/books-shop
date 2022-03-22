import { MouseEventHandler } from "react";
import CartHeader from "../molecules/CartHeader";
import bookList from "../../utils/data.json";
import styles from "../../styles/Cart.module.scss";
import CartItem from "../molecules/CartItem";
import CartIcon from "../atoms/vectors/CartIcon";
import Button from "../atoms/Button";

interface PropTypes {
    close: MouseEventHandler<HTMLSpanElement>;
}

const Cart = ({ close }: PropTypes) => {
  return (
    <div className={styles.Cart}>
      <CartHeader close={close} />
      <div className={styles.cartContent}>
        {bookList.data.map((book, bookIndex) => (
          <CartItem item={book} key={`cart_item-${bookIndex}`} />
        ))}
      </div>
      <div className={styles.cartFooter}>
        <div className={styles.totalRow}>
          <p className={styles.title}>Subtotal</p>
          <p className={styles.value}>$94.76</p>
        </div>
        <Button text="Proceed to Checkout" iconPosition="left"><CartIcon /></Button>
      </div>
    </div>
  );
}

export default Cart