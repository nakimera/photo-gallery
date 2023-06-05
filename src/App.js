import { useState, useEffect, useReducer } from "react";
import NavBar from "../src/components/NavBar";
import Card from "../src/components/Card";
import UploadForm from "../src/components/UploadForm";
import reducer from "./reducer";

const initialState = {
  items: [],
  count: null,
  inputs: { title: null, file: null, path: null },
  isCollapsed: false,
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [count, setCount] = useState(null);
  const toggle = () =>
    dispatch({ type: "collapse", payload: !state.isCollapsed });

  const handleOnChange = (e) =>
    dispatch({ type: "setInputs", payload: { value: e } });

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "setItem" });
    toggle(false);
  };

  useEffect(() => {
    setCount(state.items.length);
  }, [state.items]);

  return (
    <>
      <NavBar />
      <div className="container text-center mb-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {state.isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mt-5"></div>
        <UploadForm
          inputs={state.inputs}
          isVisible={state.isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        <h1 className="mb-2 mt-4">Gallery</h1>
        <p>
          You have {count} image{count === 1 ? "" : "s"}
        </p>
        <div className="row mt-5">
          {state.items.map((photo, index) => (
            <Card src={photo.path} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
