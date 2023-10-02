import "./Navbar.css";
import logo from "../Logo/raices-sw-logo.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

const routes = [
  {
    path: "/",
    linkname: "HOME",
  },
  {
    path: "/productos",
    linkname: "PRODUCTOS",
  },
  {
    path: "/contacto",
    linkname: "CONTACTO",
  },
  {
    path: "/preguntas-frecuentes",
    linkname: "PREGUNTAS FRECUENTES",
  },
];

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container mx-auto d-block">
          <Link className="navbar-brand" to="/">
            <img
              src={logo}
              alt="Raíces logo"
              className="mx-auto mb-0 d-block"
              width="350"
              height="100"
            />
          </Link>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-center">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-center align-items-center text-center"
            id="navbar-toggler"
          >
            <ul className="navbar-nav mb-5 ">
              {routes.map(({ path, linkname }) => (
                <Link to={path} className="nav__item ">
                  {linkname}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget />
    </div>
  );
};

export default Navbar;
