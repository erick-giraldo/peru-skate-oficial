
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Features from "./Features";
import Brands from "./Brands";
import AboutSectionOne from "./About/AboutSectionOne";
import AboutSectionTwo from "./About/AboutSectionTwo";
import Blog from "./Blog";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Pricing from "./Pricing";
import ScrollUp from "@/components/common/ScrollUp";
import ScrollToTop from "@/components/scrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";


export default function Home() {
  return (
    <>
      <ScrollUp />
      <Header />
      <Hero src="/video/home.mp4" />
      <Features />
      {/* <Brands />
      <AboutSectionOne /> */}
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
