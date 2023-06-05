import SearchForm from "./SearchForm";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ⚡ Blacksquad
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
