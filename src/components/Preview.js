import { useContext } from "react";
import { Context } from "../context";

function Preview() {
  const { state } = useContext(Context);
  return (
    state.inputs.path && <div
      className="rounded p-1 m-5"
      style={{
        width: "30%",
        height: "300px",
        backgroundImage: `url(${state.inputs.path})`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}

export default Preview;
