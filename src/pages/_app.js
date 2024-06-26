import Layout from "@/components/Layout";
import "@/styles/globals.css";
import Head from "next/head";


export default function App({ Component, pageProps }) {
  return <Layout>
    <Head>
      <title>Archiive | We are a creative studio crafting</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Component {...pageProps} />
  </Layout>;
}
