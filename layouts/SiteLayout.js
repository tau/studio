import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterNav from '../components/FooterNav';

export default function Layout({ children }) {

  return (
    <>
      <Nav />      
      <section id="main">
        {children}
      </section>
      <FooterNav />
      <Footer />
    </>
  );
}