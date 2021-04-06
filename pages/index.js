import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tau Studio</title>
        <link rel="icon" href="/favicon.ico" />
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
