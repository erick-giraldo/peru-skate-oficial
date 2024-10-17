"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
      <SectionTitle
          title="Planes flexibles para tu desarrollo"
          paragraph="En PerúSkate, creemos que el skateboarding es más que un deporte; es una herramienta poderosa para el crecimiento personal y social. Nuestro Centro de Alto Rendimiento (CARPS) es el único espacio abierto al público donde podrás desarrollar tu máximo potencial en el skateboarding de manera segura y efectiva. Elige el plan que mejor se adapte a tus objetivos y comienza tu viaje hacia la excelencia en el skate."
          center
          width="665px"
          fontTitle="font-dreadful"
        />

        <div className="w-full">
          <div className="mb-8 flex justify-center md:mb-12 lg:mb-16">
            <span
              onClick={() => setIsMonthly(true)}
              className={`${
                isMonthly
                  ? "pointer-events-none text-primary"
                  : "text-dark dark:text-white"
              } mr-4 cursor-pointer text-base font-semibold`}
            >
              Mensual
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
                >
                  <span className="active h-4 w-4 rounded-full bg-white"></span>
                </div>
              </div>
            </div>
            <span
              onClick={() => setIsMonthly(false)}
              className={`${
                isMonthly
                  ? "text-dark dark:text-white"
                  : "pointer-events-none text-primary"
              } ml-4 cursor-pointer text-base font-semibold`}
            >
              Paquete
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox
            packageName="Principiante"
            price={isMonthly ? "70" : "240"}
            duration={isMonthly ? "mes" : ""}
            subtitle={isMonthly ? "Inicia tu aventura en el mundo del skate." : "Paquete de 4 meses: Ideal para empezar."}
          >
            <OfferList text="1 sesión semanal" status="active" />
            <OfferList text="Clases básicas" status="active" />
            <OfferList text="Equipo estándar" status="active" />
            <OfferList text="Equilibrio y coordinación" status="active" />
            <OfferList text="Cultura skate" status="active" />
            <OfferList text="Evaluación mensual" status="active" />
            <OfferList text="Comunidad de principiantes" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Intermedio"
            price={isMonthly ? "70" : "400"}
            duration={isMonthly ? "mes" : ""}
            subtitle={isMonthly ? "Perfecciona tus habilidades y desafía tus límites." : "Paquete de 8 meses: Desarrolla tu técnica."}
          >
            <OfferList text="2 sesiones semanales" status="active" />
            <OfferList text="Técnicas avanzadas" status="active" />
            <OfferList text="Equipo profesional" status="active" />
            <OfferList text="Entrenamiento físico" status="active" />
            <OfferList text="Workshops creativos" status="active" />
            <OfferList text="Eventos locales" status="active" />
            <OfferList text="Asesoría personalizada" status="active" />
          </PricingBox>
          <PricingBox
            packageName="Pro"
            price={isMonthly ? "70" : "540"}
            duration={isMonthly ? "mes" : ""}
            subtitle={isMonthly ? "Alcanza tu máximo potencial y destaca en la escena." : "Paquete de 12 meses: Entrenamiento pro."}

          >
             <OfferList text="Sesiones ilimitadas" status="active" />
            <OfferList text="Plan personalizado" status="active" />
            <OfferList text="Acceso 24/7" status="active" />
            <OfferList text="Prep. física y mental" status="active" />
            <OfferList text="Mentorías pro" status="active" />
            <OfferList text="Competiciones nacionales" status="active" />
            <OfferList text="Patrocinio potencial" status="active" />
          </PricingBox>
        </div>
      </div>

      {/* <div className="absolute bottom-0 left-0 z-[-1]">
        <svg
          width="239"
          height="601"
          viewBox="0 0 239 601"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            opacity="0.3"
            x="-184.451"
            y="600.973"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -184.451 600.973)"
            fill="url(#paint0_linear_93:235)"
          />
          <rect
            opacity="0.3"
            x="-188.201"
            y="385.272"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(-128.7 -188.201 385.272)"
            fill="url(#paint1_linear_93:235)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_93:235"
              x1="-90.1184"
              y1="420.414"
              x2="-90.1184"
              y2="1131.65"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_93:235"
              x1="-159.441"
              y1="204.714"
              x2="-159.441"
              y2="915.952"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
    </section>
  );
};

export default Pricing;
