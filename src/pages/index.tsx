
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
import Header2 from "./Header2";
import Us from "./Us";
import InstagramAlbum from "./Instagram";
import Events from "./Events";
import Team from "./Team";
import Parallax from "./Parallax";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";
import PromoPrice from "./Promo/indes";


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
    {loading ? (
        <Loading />
      ) : (
     <>
      <ScrollUp />
      <Header2 />
      <Hero src="/video/home.mp4" />
      <Team />
      <Events />
      <AboutSectionTwo />
      <Features />
      {/* <Us /> */}
      {/* <AboutSectionOne /> */}
      {/* <Parallax /> */}
      {/* <Blog /> */}
      <Testimonials />
      {/* <Pricing /> */}
      <PromoPrice />
      <InstagramAlbum />
      {/* <Contact /> */}
      {/* <Brands /> */}
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
     </>
    )}
    </>
  );
}
