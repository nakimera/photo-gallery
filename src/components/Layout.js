import NavBar from "./NavBar";
import UploadForm from "./UploadForm";

function Layout({ children, state, onChange, onSubmit, toggle }) {
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
          onChange={onChange}
          onSubmit={onSubmit}
        />
        {children}
      </div>
    </>
  );
}

export default Layout;
