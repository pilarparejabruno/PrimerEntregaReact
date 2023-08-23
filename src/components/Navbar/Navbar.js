import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <div className="container mx-auto d-block">
          <a className="navbar-brand" href="#">
            <img
              src=""
              alt="Raíces logo"
              className="mx-auto mb-0 d-block"
              width="350"
              height="100"
            />
          </a>
        </div>
      </nav>
      <nav>
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
                <a className="nav__link mx-4" href="">
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
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
