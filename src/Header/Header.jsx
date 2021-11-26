import "./Header.css";
import logo from "./logo.svg";
function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logo} />
      </div>
    </header>
  );
}

export default Header;
