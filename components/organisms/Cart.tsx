import { MouseEventHandler, useEffect, useRef } from "react";
import CartHeader from "../molecules/CartHeader";
import styles from "../../styles/Cart.module.scss";
import CartItem from "../molecules/CartItem";
import CartIcon from "../atoms/vectors/CartIcon";
import Button from "../atoms/Button";
import { useSelector } from "react-redux";
import { IReduxState } from '../../redux/reducers/cartReducer';
import {totalCartAmount} from "../../utils/helpers";
interface IProps {
  close: MouseEventHandler<HTMLSpanElement>;
}

const Cart = ({ close }: IProps) => { 
  const { cartItems} = useSelector((state: IReduxState) => state);

  const cartRef: any = useRef(null);

  const  handleClickOutside = (event:any) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target)
    ) {
      close(event);
    }
  }

  useEffect(() => {
 document.addEventListener("mousedown",handleClickOutside);
return (()=> {
   document.removeEventListener("mousedown", handleClickOutside);
})


  }, [])
  return (
    <div className={styles.Cart} ref={cartRef}>
      <CartHeader close={close} />
     {cartItems.length ? 
      <>
        <div className={styles.cartContent}>
          {cartItems.map(( item , itemIndex) => (
            <CartItem item={item} key={`cart_item-${itemIndex}`} />
          ))}
        </div>
        <div className={styles.cartFooter}>
          <div className={styles.totalRow}>
            <p className={styles.title}>Subtotal</p>
            <p className={styles.value}>${totalCartAmount(cartItems)}</p>
          </div>
          <Button text="Proceed to Checkout" iconPosition="left">
            <CartIcon />
          </Button>
        </div>
      </>
        : <p className={styles.emptyCart}>Cart is Empty</p>
      }
    </div>
  );
}

export default Cart