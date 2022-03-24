
import { IBookType } from "../../utils/helpers";

export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const SET_CART_MODAL = "SET_CART_MODAL";

export const SET_SEARCH = "SET_SEARCH";
export const CLEAR_SEARCH = "CLEAR_SEARCH";
export const OPEN_SEARCH_MODAL = "OPEN_SEARCH_MODAL";
export const CLOSE_SEARCH_MODAL = "CLOSE_SEARCH_MODAL";
export interface IACTIONTYPE {
  type: string;
  payload: any;
}

export type DispatchType = (args: IACTIONTYPE) => IACTIONTYPE;

export interface IReduxState {
  cart: ICartReduxState;
  searcher: ISearchReduxState;
}

export interface ICartReduxState {
  cartItems: ICartType[];
  isCartModalOpen: boolean;
 }

export interface ISearchReduxState {
  search: string;
  isSearchModalOpen: boolean;
}

export interface ICartType {
  book: IBookType;
  quantity: number;
}
