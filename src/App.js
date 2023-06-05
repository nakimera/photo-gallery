import NavBar from "../src/components/NavBar";
import Card from "../src/components/Card";

function App() {
  return (
    <>
      <NavBar />
      <div class="container text-center mb-5">
        <h1 className="mb-4">Gallery</h1>
        <div className="row">
          {Array.apply(null, { length: 9 }).map(() => {
            return <Card />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
