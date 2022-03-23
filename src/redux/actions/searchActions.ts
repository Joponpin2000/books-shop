import { SET_SEARCH, CLEAR_SEARCH, OPEN_SEARCH_MODAL, CLOSE_SEARCH_MODAL } from "./types";

export const setSearch = (value: string) => ({
  type: SET_SEARCH,
  payload: 
    value
  ,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});


export const openSearchModal = () => ({
  type: OPEN_SEARCH_MODAL,
  payload: true,
});

export const closeSearchModal = () => ({
  type: CLOSE_SEARCH_MODAL,
  payload: false,
});
