import styles from "../../styles/CartItem.module.scss";
import { Imager } from "../../utils/helpers";

interface PropTypes {
    item: any;
}

const CartItem = ({item}: PropTypes) => {
  return (
    <div className={styles.CartItem}>
      <div className={styles.container}>
        <div className={styles.itemBox}>
          <div className={styles.cartImg}>
            <Imager src={item.image_url} width="110px" height="183px" />
          </div>
          <div className={styles.cartDetails}>
            <div className={styles.itemDetails}>
              <h5 className={styles.cartTitle}>{item.title}</h5>

              <p>{item.publisher}</p>
            </div>
            <p className={styles.removeBtn}>Remove</p>
          </div>
        </div>
        <div className={styles.itemActions}>
          <div>
            <span className={styles.priceTag}>${item.price}</span>
            <div className={styles.actionBoxes}>
              <div className={styles.mutateBtn}>-</div>
              <div className={styles.valueBox}>1</div>
              <div className={styles.mutateBtn}>+</div>
            </div>
          </div>
          <span className={styles.totalprice}>$4050</span>
        </div>
      </div>
    </div>
  );
}

export default CartItem