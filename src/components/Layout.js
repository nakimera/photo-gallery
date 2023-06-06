import { useContext } from "react";
import NavBar from "./NavBar";
import UploadForm from "./UploadForm";
import { Context } from "../context";

function Layout({ children }) {
  const { state, dispatch } = useContext(Context);
  const toggle = () =>
    dispatch({ type: "collapse", payload: !state.isCollapsed });

  return (
    <>
      <NavBar />
      <div className="container text-center mb-5">
        <button className="btn btn-success float-end" onClick={toggle}>
          {state.isCollapsed ? "Close" : "+ Add"}
        </button>
        <div className="clearfix mt-5"></div>
        <UploadForm toggle={toggle} />
        {children}
      </div>
    </>
  );
}

export default Layout;
