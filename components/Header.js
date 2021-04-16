import { ArrowDown } from 'react-feather';

export default function Header() {

  const scrollToMain = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <>
      <header>
        <section className="content h-full relative">
          <section className="header__wrapper t-heading">
            <h1 className="mt-0 mt-heading">Tau Studio</h1>
            <h3>Quis deserunt pariatur mollit voluptate nulla voluptate nisi anim nulla veniam et reprehenderit cupidatat incididunt.</h3>
            <p>Officia ipsum irure magna dolore velit deserunt ut est mollit aute. Dolore commodo cupidatat qui irure nostrud ipsum nulla enim dolor anim labore magna.</p>
            <p>Aliquip nulla sunt cupidatat ut deserunt ea. Cillum aliquip duis ullamco anim nulla et adipisicing tempor veniam reprehenderit. Ipsum nisi ad excepteur adipisicing laboris commodo qui. Eiusmod nisi ex officia in aliquip nisi minim irure ut officia elit pariatur sint.</p>
          </section>
          
          <div onClick={scrollToMain} className="mouse"></div>
        </section>
        <div onClick={scrollToMain} class="scroll-down">
            <span className="no-select">Desplázate hacia abajo</span>
            <ArrowDown />
          </div>
      </header>
    </>
  );
}