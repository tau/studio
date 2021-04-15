import Head from 'next/head'

export default function Home() {
  return (
    <>
      <main className="preview">
        <div className="preview__wrapper">
          <img className="preview__logo" src="/tau.svg" />
          <img className="preview__name" src="/studio.svg" />
        </div>
      </main>
    </>
  )
}
