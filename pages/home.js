import Head from 'next/head'
import SiteLayout from '../layouts/SiteLayout'

function Home() {
  return (
    <>
      <Head>

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