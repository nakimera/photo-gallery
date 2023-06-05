import { useState, useEffect } from "react";
import NavBar from "../src/components/NavBar";
import Card from "../src/components/Card";
import UploadForm from "../src/components/UploadForm";

function App() {
  const [count, setCount] = useState(null);
  const [inputs, setInputs] = useState({ title: null, file: null, path: null });
  const [items, setItems] = useState([]);
  const [isCollapsed, collapse] = useState(false);
  const toggle = () => collapse(!isCollapsed);
  const handleOnChange = (e) => {
    if (e.target.name === "file") {
      setInputs({
        ...inputs,
        file: e.target.files[0],
        path: URL.createObjectURL(e.target.files[0]),
      });
    } else {
      setInputs({ ...inputs, title: e.target.value });
    }
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    setItems([inputs.path, ...items]);
  };

  useEffect(() => {
    setCount(items.length)
  }, [items])

  return (
    <>
      <NavBar />
      <div className="container text-center mb-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mt-5"></div>
        <UploadForm
          inputs={inputs}
          isVisible={isCollapsed}
          onChange={handleOnChange}
          onSubmit={handleOnSubmit}
        />
        <h1 className="mb-2 mt-4">Gallery</h1>
        <p>You have {count} image{count === 1 ? '' : 's'}</p>
        <div className="row mt-5">
          {items.map((photo, index) => (
            <Card src={photo} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
