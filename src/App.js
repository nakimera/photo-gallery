import { useReducer, useMemo } from "react";
import Layout from "./components/Layout";
import Card from "../src/components/Card";
import reducer from "./reducer";

const initialState = {
  items: [],
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggle = () =>
    dispatch({ type: "collapse", payload: !state.isCollapsed });

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(false);
  };

  const count = useMemo(() => {
    return state.items.length;
  }, [state.items]);

  return (
    <>
      <Layout
        state={state}
        onChange={handleOnChange}
        onSubmit={handleOnSubmit}
        toggle={toggle}
      >
        <h1 className="mb-2 mt-4">Gallery</h1>
        <p>
          You have {count} image{count === 1 ? "" : "s"}
        </p>
        <div className="row mt-5">
          {state.items.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </Layout>
    </>
  );
}

export default App;
