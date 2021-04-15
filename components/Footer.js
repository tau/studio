import { Facebook, Github, Googleplay, Instagram, Linkedin, Twitter } from '@icons-pack/react-simple-icons';

export default function Footer() {
  return (
    <>
      <footer>
        <section className="content">
          <div className="footer__wrapper">
            <div className="footer__flex">
              <img className="footer__logo" src="/tau.svg" />
              <div className="footer__icons">
                <a href="https://www.facebook.com/TauStudioX"><Facebook title="Facebook" /></a>
                <a href="https://twitter.com/TauStudioX"><Twitter title="Twitter" /></a>
                <a href="https://www.linkedin.com/company/tau"><Linkedin title="Linkedin" /></a>
                <a href="https://www.instagram.com/taustudiox"><Instagram title="Instagram" /></a>
                <a href="https://github.com/tau"><Github title="Github" /></a>
                <a href="https://play.google.com/store/apps/dev?id=4747667721362765016"><Googleplay title="Google Play" /></a>
              </div>
            </div>
            <div className="footer__flex">
              <div><a href="mailto:hey@tau.studio">hey@tau.studio</a></div>
              <div className="no-select">/</div>
              <div>©{(new Date().getFullYear())} Tau Studio</div>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
}