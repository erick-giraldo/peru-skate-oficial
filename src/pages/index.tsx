import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "./Header";
import Hero from "./Home";
import Footer from "./Footer";
import Features from "./Features";
import Brands from "./Brands";
import AboutSectionOne from "./About/AboutSectionOne";
import AboutSectionTwo from "./About/AboutSectionTwo";
import Blog from "./Blog";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";

export default function Home() {
  return (
    <>
      <Header />
      <Hero src="/video/home.mp4" />
      <Features />
      <Brands />
      <AboutSectionOne />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />

    </>
  );
}
