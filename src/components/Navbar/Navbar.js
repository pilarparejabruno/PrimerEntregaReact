import "./Navbar.css";
import logo from "../Logo/raices-sw-logo.png";

const Navbar = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="container mx-auto d-block">
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Raíces logo"
              class="mx-auto mb-0 d-block"
              width="350"
              height="100"
            />
          </a>
        </div>
      </nav>
      <nav class="navbar navbar-expand-lg">
        <div class="container d-flex justify-content-center">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-toggler"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse d-flex justify-content-center align-items-center text-center"
            id="navbar-toggler"
          >
            <ul class="navbar-nav mb-5">
              <li class="nav__item">
                <a class="nav__link mx-4" href="">
                  NOSOTROS
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link mx-4" href="./pages/productos.html">
                  PRODUCTOS
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link mx-4" href="">
                  CONTACTO
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link mx-4" href="">
                  PREGUNTAS FRECUENTES
                </a>
              </li>
              <li class="nav__item">
                <i class="fa-solid fa-cart-shopping"></i>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
