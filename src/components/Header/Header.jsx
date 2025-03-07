import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../../assets/logo/InStock-Logo.svg";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="InStock Logo" className="header__logo-img" />
      </Link>
      <nav className="header__nav">
        <NavLink to="/warehouse" className="header__link">
          Warehouses
        </NavLink>
        <NavLink to="/inventory" className="header__link">
          Inventory
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
