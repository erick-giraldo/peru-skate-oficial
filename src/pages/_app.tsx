import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Duración de la animación en milisegundos
      once: true, // Ejecuta la animación solo una vez al hacer scroll
    });
  }, []);

  return <Component {...pageProps} />;
}
