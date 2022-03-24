import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  SET_CART_MODAL
} from "./types";

export const addToCart =
  (book: any, quantity: number) => ({
        type: CART_ADD_ITEM,
        payload: {
          book,
          quantity,
        },
  })
      

export const removeFromCart =
  (bookId: number) => ({
      type: CART_REMOVE_ITEM,
      payload: bookId,
    });


export const setCartModal =
  (value: boolean) => ({
      type: SET_CART_MODAL,
      payload: value,
    });
