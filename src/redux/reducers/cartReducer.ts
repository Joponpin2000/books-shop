import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  IACTIONTYPE,
  ICartReduxState,
  SET_CART_MODAL
} from "../actions/types";

const defaultState: ICartReduxState = {
  cartItems: [],
  isCartModalOpen: false,
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
          isCartModalOpen: true,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
          isCartModalOpen: true,
        };
      }

    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.book.id !== action.payload),
      };

    case SET_CART_MODAL:
       return {
        ...state,
        isCartModalOpen: action.payload,
      };

    default:
      return state;
  }
}
