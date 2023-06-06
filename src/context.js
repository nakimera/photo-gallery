import { createContext, useReducer } from "react";
import reducer from "./reducer";
import Firestore from "./handlers/firestore";

const {readDocs} = Firestore;

const initialState = {
  items: [],
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const read = async () => {
    const items = await readDocs("stocks");
    dispatch({type: "setItems",  payload: { items }})
  }
  return (
    <Context.Provider value={{ state, dispatch, read }}>{children}</Context.Provider>
  );
};

export default Provider;
