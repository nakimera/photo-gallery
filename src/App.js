import { useMemo, useContext, useEffect } from "react";
import Layout from "./components/Layout";
import Card from "../src/components/Card";
import { Context } from "./context";

function App() {
  const { state, read } = useContext(Context);

  const count = useMemo(() => {
    return state.items.length;
  }, [state.items]);

  useEffect(() => {
    read().then(console.log);
  }, [read]);

  return (
    <Layout>
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
  );
}

export default App;
