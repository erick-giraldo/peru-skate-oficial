import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Header";
import Hero from "./Home";
import Footer from "./Footer";


export default function Home() {
  return (
    <>
  <Header />
  <Hero src="/video/banner.mp4"  className="w-full" autoplay={true} />
  <Footer />
    </>
  );
}
