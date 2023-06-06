import { createContext, useReducer } from "react";
import reducer from "./reducer";

const initialState = {
  items: [],
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

export const Context = createContext();

const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export default Provider;
