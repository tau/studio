import Head from 'next/head'
import SiteLayout from '../layouts/SiteLayout'
import Clients from '../components/Clients'
import Square from '../components/Square'
import { createClient } from 'contentful';
import FooterNav from '../components/FooterNav';

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: client
  })

  return {
    props: {
      clients: data.items
    }
  }
}

function Home({ clients }) {

  console.log(clients)
  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,follow" />
        <meta key="googlebot" name="googlebot" content="noindex,follow" />
      </Head>

      <section className="square-grid">        
        {clients.map((client, i) => (
          <Square client={client} index={i} />
        ))}
      </section>

      <FooterNav />
    </>
  )
}

Home.getLayout = page => (
  <SiteLayout>
    {page}
  </SiteLayout>
)

export default Home