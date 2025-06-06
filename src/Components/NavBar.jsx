import { Link } from "react-router-dom";
import '../css/Navbar.css';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="app-logo">
        <Link to="/">Movie App</Link>
      </div>
      <div className="navbar-links d-flex">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/Favorites" className="nav-link">
          Favorites
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
