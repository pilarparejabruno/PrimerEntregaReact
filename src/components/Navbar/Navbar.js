import "./Navbar.css";
import logo from "../Logo/raices-sw-logo.png";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container mx-auto d-block">
          <a className="navbar-brand" href="#">
            <img
              src={logo}
              alt="Raíces logo"
              className="mx-auto mb-0 d-block"
              width="350"
              height="100"
            />
          </a>
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
            <ul className="navbar-nav mb-5">
              <li className="nav__item">
                <a className="nav__link mx-4" href="">
                  NOSOTROS
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link mx-4" href="./pages/productos.html">
                  PRODUCTOS
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link mx-4" href="">
                  CONTACTO
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link mx-4" href="">
                  PREGUNTAS FRECUENTES
                </a>
              </li>
              <li className="nav__item">
                <i className="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <CartWidget />
    </div>
  );
};

export default Navbar;
