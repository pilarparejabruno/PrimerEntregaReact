import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col">
            <h5 className="title">¿Cómo podemos ayudarte?</h5>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <p className="subtitle">raices.cosmeticavegana@gmail.com</p>
            <p className="subtitle">+3777 303268</p>
          </div>
          <div className="col-md-4">
            <p className="subtitle text-center">Seguinos en las redes</p>
            <ul className="d-flex justify-content-center">
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="social-icon fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="social-item">
                <a href="" className="social-link">
                  <i className="social-icon fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p className="paragraph text-center">COPYRIGHT RAÍCES - 2023</p>
            <p className="paragraph text-center">
              TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>
          <div className="col-md-4">
            <ul className="navbar-nav mb-5 d-flex">
              <li className="nav__item">
                <a className="nav__link mx-4" href="./index.html">
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link mx-4" href="./pages/productos.html">
                  Productos
                </a>
              </li>
              <li className="nav__item">
                <a className="nav__link mx-4" href="">
                  Preguntas frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
