import About from "@/components/About";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Process from "@/components/Process";
import Works from "@/components/Works";
import { createClient } from "contentful";
import { ReactLenis } from 'lenis/react'
import { useState } from "react";



export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'work' })
  return {
    props: {
      works: res.items,
    },
    revalidate: 10,
  }
}
export default function Home({ works }) {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <ReactLenis root options={{ duration: 2 }}>
        {/* <Loader /> */}
        <Header navColor={"#FFD951"}/>
        <Landing />
        <Works works={works} />
        <About />
        <Process />

      </ReactLenis>
    </>
  );
}
