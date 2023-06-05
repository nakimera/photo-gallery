import { useState } from "react";
import NavBar from "../src/components/NavBar";
import Card from "../src/components/Card";

const photos = [
  "https://picsum.photos/id/1001/200/200",
  "https://picsum.photos/id/1002/200/200",
  "https://picsum.photos/id/1003/200/200",
  "https://picsum.photos/id/1004/200/200",
  "https://picsum.photos/id/1005/200/200",
  "https://picsum.photos/id/1006/200/200",
];

function App() {
  const [items, setItems] = useState(photos);
  return (
    <>
      <NavBar />
      <div className="container text-center mb-5">
        <h1 className="mb-4">Gallery</h1>
        <div className="row">
          {items.map((photo) => (
            <Card src={photo} key={photo} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
