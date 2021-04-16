import Nav from '../components/Nav'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {

  return (
    <>
      <Nav />
      <Header />
      <section id="main">
        {children}
      </section>
      <Footer />
    </>
  );
}