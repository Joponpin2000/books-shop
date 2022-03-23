import {
  IACTIONTYPE,
  SET_SEARCH,
  CLEAR_SEARCH,
  OPEN_SEARCH_MODAL,
  CLOSE_SEARCH_MODAL,
  ISearchReduxState,
} from "../actions/types";

const defaultState: ISearchReduxState = {
  search: "",
  isSearchModalOpen: false,
};

export default function searchReducer(
  state: ISearchReduxState = defaultState,
  action: IACTIONTYPE
) {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload,
      };

    case CLEAR_SEARCH:
      return {
        ...state,
        search: "",
      };

    case OPEN_SEARCH_MODAL:
      return {
        ...state,
        isSearchModalOpen: true,
      };
    case CLOSE_SEARCH_MODAL:
      return {
        search: "",
        isSearchModalOpen: false,
      };

    default:
      return state;
  }
}
