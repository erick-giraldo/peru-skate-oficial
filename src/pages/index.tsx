
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Features from "./Features";
import Brands from "./Brands";
import AboutSectionOne from "./About/AboutSectionOne";
import AboutSectionTwo from "./About/AboutSectionTwo";
import Blog from "./Blog";
import Contact from "./Contact";
import Pricing from "./Pricing";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/scrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import Testimonials from "./Testimonials";
import Carousel from "./Carousel";
import Class from "./Class";
import Header2 from "./Header2";


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Header2 />
      <Hero src="/video/home.mp4" />
      <Features />
      {/* <Brands /> */}
      {/* <AboutSectionOne /> */}
      <AboutSectionTwo />
      <Carousel />
      {/* <Testimonials /> */}
      <Pricing />
      {/* <Blog /> */}
      <Class />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
