import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  IACTIONTYPE,
  ICartReduxState,
} from "../actions/types";

const defaultState: ICartReduxState = {
  cartItems: [],
};

export default function cartReducer(
  state: ICartReduxState = defaultState,
  action: IACTIONTYPE
) {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((x) => x.book.id === item.book.id);
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x.book.id === product.book.id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case CART_REMOVE_ITEM:
      return {
        cartItems: state.cartItems.filter((x) => x.book.id !== action.payload),
      };

    default:
      return state;
  }
}
