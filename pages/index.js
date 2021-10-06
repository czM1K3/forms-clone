import Head from 'next/head'
import Layout from '../components/Layout'
import ListForms from '../components/Forms/ListForms'
import { useSession } from '../utils/sessionContext'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container">
        <h1>Forms</h1>
        <ListForms />
      </main>
    </Layout>
  )
}
