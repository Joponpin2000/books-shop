import { MouseEventHandler } from "react";
import styles from "../../styles/CartHeader.module.scss"
import BackIcon from "../atoms/vectors/BackIcon";
import CartIcon from "../atoms/vectors/CartIcon";

interface IProps {
  close: MouseEventHandler<HTMLSpanElement>;
}

const CartHeader = ({ close  }: IProps) => {
  return (
    <div className={styles.CartHeader}>
      <span onClick={close} className={styles.back}>
        <BackIcon />
        <p>Back</p>
      </span>
      <span className={styles.title}>
        <p>Your Cart</p>
        <CartIcon />
      </span>
    </div>
  );
}

export default CartHeader