import SearchForm from "./SearchForm";
import Navigation from "./Navigation";
import Dropdown from "./Dropdown";

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-light mb-5">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
          ⚡ Blacksquad
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <Navigation />
          <SearchForm />
          <Dropdown />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
