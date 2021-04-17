import Link from 'next/link'
import { useRouter } from 'next/router'

export default function FooterNav() {

  const router = useRouter()

  return (
    <>
      <nav>
        <section className="content">
          <section className="footer-nav__wrapper">
            <section className="footer-nav__flex">
              <div className="footer-nav__item">
                <Link href="/trabajos">
                  <a>
                    Trabajos
                  </a>
                </Link>
                <p>Our clients and case-studies are extremely diverse, however many are confidential and can not be displayed on this site.</p>
              </div>
              <div className="footer-nav__item">
                <Link href="/proyectos">
                  <a>Proyectos</a>
                </Link>
                <p>Creative agencies should always be generating. This page is a collection of our various articles, ideation, and press.</p>
              </div>
              <div className="footer-nav__item">
                <Link href="/nosotros">
                  <a>El estudio</a>
                </Link>
                <p>We specialize in projects requiring innovative design, bleeding-edge technologies, and complex data modeling.</p>
              </div>
              <div className="footer-nav__item">
                <Link href="/contacto">
                  <a>Contacto</a>
                </Link>
                <p>We're a full-service digital agency based out of Brooklyn. This page gives an overview of what's going on at RANGER.</p>
              </div>
            </section>
          </section>
        </section>
      </nav>
    </>
  );
}