import "./Footer.css";
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
    path: "/preguntas-frecuentes",
    linkname: "PREGUNTAS FRECUENTES",
  },
];

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
                <a href="" className="social-link"></a>
              </li>
            </ul>
            <p className="paragraph text-center">COPYRIGHT RAÍCES - 2023</p>
            <p className="paragraph text-center">
              TODOS LOS DERECHOS RESERVADOS
            </p>
          </div>
          <div className="col-md-4">
            <ul className="navbar-nav mb-5 ">
              {routes.map(({ path, linkname }) => (
                <Link to={path} className="nav__item ">
                  {linkname}
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
