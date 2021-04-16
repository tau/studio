import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Nav() {

  const router = useRouter()

  return (
    <>
      <nav>
        <section className="content">
          <div className="nav__wrapper">
            <div onClick={() => router.push('/')} className="nav__logo-wrapper">
              <img className="nav__logo" src="/tau.svg" />
              <img className="nav__name" src="/studio.svg" />
            </div>
            <div className="nav__flex">
              <ul className="nav__items">
                <li className="c1">
                  <Link href="/trabajos">
                    <a>Trabajos</a>
                  </Link>
                </li>
                <li className="c2">
                  <Link href="/proyectos">
                    <a>Proyectos</a>
                  </Link>
                </li>
                <li className="c3">
                  <Link href="/nosotros">
                    <a>El estudio</a>
                  </Link>
                </li>
                <li className="c4">
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