import { Button } from "@/components/ui/button";

interface HeroProps {
  src: string;
}

export default function Hero({ src }: HeroProps) {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=51945970045&text=🔥Deseo%20reservar%20una%20clase%20de%20prueba", "_blank"); // Cambia la ruta a la que deseas redirigir
  };

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-white h-70vh flex items-center"
      >
        <div className="absolute inset-0 z-0">
          <video
            className="w-full h-full object-cover"
            crossOrigin="anonymous"
            playsInline
            tabIndex={0}
            preload="auto"
            muted
            loop
            autoPlay
            src={src}
          ></video>
        </div>
        <div className="relative z-10 py-10 px-10">
          <div className="flex flex-col items-start sm:pr-[50%]">
            <h1 className="font-dreadful mb-5  leading-tight text-white text-[60px] sm:text-[60px] sm:leading-tight lg:text-[80px] xl:text-[111px] md:leading-tight">
            ¡Bienvenido, Rider!
            {/* Clases de skateboarding en lima, perú */}
            </h1>
            <p className="mb-2 text-white text-body-color sm:text-2xl md:text-xl">
              ¡Desarrolla tus habilidades y destrezas al máximo! Ofrecemos
              clases personalizadas y grupales para todos los niveles:
              principiante, básico y avanzado.
            </p>
            <p className="mb-12 text-white  text-body-color sm:text-xs md:text-base">
              Disponibles para niños a partir de los 3 años y adultos.
            </p>
            <div className="self-center md:self-auto">
              <Button
                onClick={handleClick}
                variant="default"
                className="md:h-14 lg:px-8 h-12 md:px-4  w-60  md:w-80 rounded-xl bg-[#2f76b4] text-xs lg:text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#2f76b4]/80" 
              >
                🔥 Reserva tu clase de prueba gratis
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
