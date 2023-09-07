import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col">
            <h5 class="title">¿Cómo podemos ayudarte?</h5>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <p class="subtitle">raices.cosmeticavegana@gmail.com</p>
            <p class="subtitle">+3777 303268</p>
          </div>
          <div class="col-md-4">
            <p class="subtitle text-center">Seguinos en las redes</p>
            <ul class="d-flex justify-content-center">
              <li class="social-item">
                <a href="" class="social-link">
                  <i class="social-icon fa-brands fa-facebook"></i>
                </a>
              </li>
              <li class="social-item">
                <a href="" class="social-link">
                  <i class="social-icon fa-brands fa-instagram"></i>
                </a>
              </li>
            </ul>
            <p class="paragraph text-center">COPYRIGHT RAÍCES - 2023</p>
            <p class="paragraph text-center">TODOS LOS DERECHOS RESERVADOS</p>
          </div>
          <div class="col-md-4">
            <ul class="navbar-nav mb-5 d-flex">
              <li class="nav__item">
                <a class="nav__link mx-4" href="./index.html">
                  Home
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link mx-4" href="./pages/productos.html">
                  Productos
                </a>
              </li>
              <li class="nav__item">
                <a class="nav__link mx-4" href="">
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
