import Link from 'next/link'

export default function Nav() {
  return (
    <>
      <nav>
        <section className="content">
          <div className="nav__wrapper">
            <div className="nav__logo-wrapper">
              <img className="nav__logo" src="/tau.svg" />
              <img className="nav__name" src="/studio.svg" />
            </div>
            <div className="nav__flex">
              <ul className="nav__items">
              <li>
                  
                </li>
                <li>
                  <Link href="/trabajos">
                    <a>Trabajos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/proyectos">
                    <a>Proyectos</a>
                  </Link>
                </li>
                <li>
                  <Link href="/nosotros">
                    <a>El estudio</a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacto">
                    <a>Contacto</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </nav>
    </>
  );
}