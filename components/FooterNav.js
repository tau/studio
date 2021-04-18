import Link from 'next/link'
import { ArrowLeft } from 'react-feather';

export default function FooterNav() {

  return (
    <>
      <nav>
        <section className="content">
          <section className="footer-nav__wrapper">
            <section className="footer-nav__flex">
              <div className="footer-nav__item">
                <Link href="/trabajos">
                  <a className="c1">
                    <ArrowLeft className="item__icon" />
                    <span>Trabajos</span>
                  </a>
                </Link>
                <p>Veniam excepteur cupidatat et reprehenderit fugiat adipisicing sit nostrud do reprehenderit.</p>
              </div>
              <div className="footer-nav__item">
                <Link href="/proyectos">
                  <a className="c2">
                    <ArrowLeft className="item__icon" />
                    <span>Proyectos</span>
                  </a>
                </Link>
                <p>Elit adipisicing consectetur amet aliquip minim dolor velit reprehenderit duis dolor aute quis in. </p>
              </div>
              <div className="footer-nav__item">
                <Link href="/nosotros">
                  <a className="c3">
                    <ArrowLeft className="item__icon" />
                    <span>El estudio</span>
                  </a>
                </Link>
                <p>Deserunt consequat consectetur deserunt est Lorem elit fugiat tempor cillum commodo.</p>
              </div>
              <div className="footer-nav__item">
                <Link href="/contacto">
                  <a className="c4">
                    <ArrowLeft className="item__icon" />
                    <span>Contacto</span>
                  </a>
                </Link>
                <p>Labore tempor adipisicing ex magna officia ullamco anim.</p>
              </div>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
}