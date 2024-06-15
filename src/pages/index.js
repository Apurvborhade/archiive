import About from "@/components/About";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
import Loader from "@/components/Loader";
import Process from "@/components/Process";
import Works from "@/components/Works";
import { ReactLenis } from 'lenis/react'




export default function Home() {



  return (
    <>
      <ReactLenis root options={{ duration: 2 }}>
        <Loader />
        <Header />
        <Landing />
        <Works />
        <About />
        <Process />
        <Footer />
      </ReactLenis>
    </>
  );
}
