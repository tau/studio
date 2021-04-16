import Head from 'next/head'
import '../styles/styles.scss'

function Tau({ Component, pageProps }) {

  const getLayout = Component.getLayout || (page => page)

  return <>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <title>Tau Studio | Desarrollo de experiencias web y marketing digital</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="description" content="Estudio de desarrollo de experiencias web a medida, marketing digital y SEO" />

      <meta property="og:title" content="Tau Studio | Desarrollo de experiencias web y marketing digital" />
      <meta property="og:description" content="Estudio de desarrollo de experiencias web a medida, marketing digital y SEO" />
      <meta property="og:image" content="/tau-studio.jpg" />
      <meta property="og:type" content="website" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;600&display=swap" rel="stylesheet" />
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
    {getLayout(<Component {...pageProps} />)}
  </>
}

export default Tau
