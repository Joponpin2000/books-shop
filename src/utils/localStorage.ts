import { ICartReduxState } from "../redux/actions/types";

export const loadState = () => {
  try {
    const serialState = localStorage.getItem("qdxBooksCart");
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  } 
      
};
export const saveState = (state: {cart:ICartReduxState}) => {
  try {
    const serialState = JSON.stringify(state);
    localStorage.setItem("qdxBooksCart", serialState);
  } catch (err) {
    console.log(err);
  }
};