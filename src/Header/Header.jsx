import "./Header.css";
import logo from "./logo.svg";
import search from "./search.svg";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__logo">
          <img src={logo} />
        </div>
        <div className="header__search">
          <button className="search_btn">
            <img src={search} alt="search logo" />
          </button>
          <input
            type="search"
            name="test"
            id="site-search"
            placeholder="Try “Miami”"
          />
        </div>
        <div className="header_menu">
          <a href="#" className="menu_links">
            Become a host
          </a>
          <a href="#" className="menu_links">
            Help
          </a>
          <a href="#" className="menu_links">
            Sign Up
          </a>
          <a href="#" className="menu_links">
            Log In
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
