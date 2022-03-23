import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
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

