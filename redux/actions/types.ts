
export const CART_ADD_ITEM = "CART_ADD_ITEM";
export const CART_REMOVE_ITEM = "CART_REMOVE_ITEM";
export const CART_GET_NUMBER = "CART_GET_NUMBER";

export const INCREASE_ITEM_QTY = "INCREASE_ITEM_QTY";

export interface IACTIONTYPE {
  type: string;
  payload: any;
}

export type DispatchType = (args: IACTIONTYPE) => IACTIONTYPE;

