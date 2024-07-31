import About from "@/components/About";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Process from "@/components/Process";
import Works from "@/components/Works";
import { createClient } from "contentful";
import { ReactLenis } from 'lenis/react'

import { useEffect, useState } from "react";





export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'work', limit: 6, 'fields.feature': true })
  return {
    props: {
      works: res.items,
    },
  }
}
export default function Home({ works }) {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      const hasVisited = sessionStorage.getItem('hasVisited');
      if (hasVisited) {
        setShowLoader(false);
        window.addEventListener('beforeunload', () => {
          sessionStorage.removeItem('hasVisited');
        });
      } else {
        sessionStorage.setItem('hasVisited', 'true');
        setShowLoader(true);
      }
    };

    // Run handleLoad on component mount
    handleLoad();


    // Clean up function to reset the loader state if needed
    return () => {
      setShowLoader(false);
      window.removeEventListener('beforeunload', () => {
        sessionStorage.removeItem('hasVisited');
      });
    };
  }, [showLoader]);
  return (
    <>
      <ReactLenis root options={{ duration: 2 }}>
        {showLoader && <Loader />}
        <Header navColor={"#F7EC4D"} />
        <Landing />
        <Works works={works} />
        <About />
        <Process />
      </ReactLenis>
    </>
  );
}
