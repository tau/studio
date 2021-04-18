import Head from 'next/head'
import SiteLayout from '../layouts/SiteLayout'
import Clients from '../components/Clients'
import Header from '../components/Header'

function Contacto() {

  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>

      <Header />
    </>
  )
}

Contacto.getLayout = page => (
  <SiteLayout>
    {page}
  </SiteLayout>
)

export default Contacto