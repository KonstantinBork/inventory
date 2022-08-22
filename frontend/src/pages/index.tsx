import Head from "next/head"
import Footer from "../components/footer"
import Header from "../components/header"

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Inventory</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>
        Main part of the homepage!
      </main>
      <Footer />
    </>
  )
}

export default HomePage