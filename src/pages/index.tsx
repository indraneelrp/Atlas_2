import { useSession } from 'next-auth/react'
import LoadingScreen from '~/components/common/LoadingScreen'
import Head from 'next/head'

const HomePage = () => {
  const { status } = useSession({ required: true })

  return (
    <>
      <Head>
        <title>Atlas</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="The home page for Atlas" />
      </Head>
      {status === 'loading' ? <LoadingScreen /> : <div>Home Page</div>}
    </>
  )
}

export default HomePage
