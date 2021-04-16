import Head from 'next/head'
import SiteLayout from '../layouts/SiteLayout'

function Home() {
  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>
            
    </>
  )
}

Home.getLayout = page => (
  <SiteLayout>
    {page}
  </SiteLayout>
)

export default Home