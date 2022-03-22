import styles from "../../styles/Cart.module.scss";
import CartHeader from "../molecules/CartHeader";
import BackIcon from "../atoms/vectors/BackIcon";
import { MouseEventHandler } from "react";

interface PropTypes {
    close: MouseEventHandler<HTMLSpanElement>;
}

const Cart = ({ close }: PropTypes) => {
  return (
    <div className={styles.Cart}>
              <CartHeader close={close} />
              <div className={styles.cartContent}>
                
        </div>
    </div>
  )
}

export default Cart