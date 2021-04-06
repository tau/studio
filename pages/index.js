import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tau Studio</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-K04X75PRJ4"></script>
        <script dangerouslySetInnerHTML={
          {
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-K04X75PRJ4');
              `
          }
        }>
        </script>
      </Head>

      <main className="grid">
        <div className="flex">
          <img className="animated" src="/tau.svg" />
          <img className="ml-2" src="/studio.svg" />
        </div>
      </main>

      <footer>

      </footer>
    </>
  )
}
