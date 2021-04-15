import Image from 'next/image'
import Footer from '../components/Footer'
import Nav from '../components/nav';

export default function Layout({ children }) {

  return (
    <>
      <section>
        <Nav />

        <br />
        <br />
        <br />
        <br />
        
        <Footer />
      </section>
    </>
  );
}