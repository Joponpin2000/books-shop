import { IBookType } from "../../utils/helpers";
import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  IACTIONTYPE
} from "../actions/types";

export interface ICartType {
    book: IBookType;
  quantity: number;
  
  }

export interface IReduxState {
  cartItems: ICartType[];
 }

const defaultState: IReduxState = {
  cartItems:[],
};

export default function cartReducer(state: IReduxState = defaultState, action: IACTIONTYPE) {
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
