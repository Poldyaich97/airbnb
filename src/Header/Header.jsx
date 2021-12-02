import "./Header.css";
import logo from "./logo.svg";
import search from "./search.svg";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="content">
          <div className="header__logo">
            <img src={logo} />
          </div>
          <div className="header__search">
            <div className="header__search_wrapper">
              <input
                type="search"
                name="test"
                id="site-search"
                placeholder="Try “Miami”"
                // className="header__site-search"
              />
            </div>
          </div>
          <nav className="header__menu">
            <li>
              <a href="#" className="header__menu_links">
                Become a host
              </a>
            </li>
            <li>
              <a href="#" className="header__menu_links">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="header__menu_links">
                Sign Up
              </a>
            </li>
            <li>
              <a href="#" className="header__menu_links">
                Log In
              </a>
            </li>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
