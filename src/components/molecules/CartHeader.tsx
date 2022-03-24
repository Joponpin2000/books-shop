import { MouseEventHandler } from "react";
import styles from "../../styles/CartHeader.module.scss"
import BackButton from "../atoms/BackButton";
import CartIcon from "../atoms/vectors/CartIcon";

interface IProps {
  close: MouseEventHandler<HTMLSpanElement>;
}

const CartHeader = ({ close  }: IProps) => {
  return (
    <div className={styles.CartHeader}>
      <BackButton onClick={close} />

      <span className={styles.title}>
        <p>Your Cart</p>
        <CartIcon />
      </span>
    </div>
  );
}

export default CartHeader