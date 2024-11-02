"use client";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";
import OfferList from "./OfferList";
import PricingBox from "./PricingBox";
import Image from "next/image";

const Pricing = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <section id="pricing" className="relative z-10 pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <SectionTitle
          title="Planes flexibles para tu desarrollo"
          paragraph="En PerúSkate, creemos que el skateboarding es más que un deporte; es una herramienta poderosa para el crecimiento personal y social. Nuestro Centro de Alto Rendimiento (CARPS) es el único espacio abierto al público donde podrás desarrollar tu máximo potencial en el skateboarding de manera segura y efectiva. Elige el plan que mejor se adapte a tus objetivos y comienza tu viaje hacia la excelencia en el skate."
          center
          width="965px"
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
              Clase
            </span>
            <div
              onClick={() => setIsMonthly(!isMonthly)}
              className="flex cursor-pointer items-center"
            >
              <div className="relative">
                <div className="h-5 w-14 rounded-full bg-navBurger shadow-inner"></div>
                <div
                  className={`${
                    isMonthly ? "" : "translate-x-full"
                  } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-navBurger transition`}
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
            duration={isMonthly ? "clase" : ""}
            promo={"¡PROMOCIÓN POR WEB S/60.00!"}
            subtitle={
              isMonthly
                ? "Inicia tu aventura en el mundo del skate."
                : "Paquete por 4 clases: Ideal para empezar."
            }
          >
            <OfferList text="1 sesión semanal" status="active" />
            <OfferList text="Clases básicas" status="active" />
            <OfferList text="Implementos profesionales" status="active" />
            <OfferList text="Confianza y coordinación" status="active" />
            <OfferList text="Superación y autoestima" status="active" />
            <OfferList text="Cultura skate" status="active" />
            <OfferList text="Desarrollo de vínculos sociales" status="active" />
            <OfferList
              text="Durante el primer mes se le prestan todos los implementos"
              status="active"
              classText="text-navBurger"
            />
          </PricingBox>

          <PricingBox
            packageName="Intermedio"
            price={isMonthly ? "70" : "400"}
            promo={"¡PROMOCIÓN POR WEB S/60.00!"}
            duration={isMonthly ? "clase" : ""}
            subtitle={
              isMonthly
                ? "Perfecciona tus habilidades y desafía tus límites."
                : "Paquete por 8 clases: Desarrolla tu técnica."
            }
          >
            <OfferList text="2 sesiones semanales" status="active" />
            <OfferList text="Técnicas avanzadas" status="active" />
            <OfferList text="Implementos profesionales" status="active" />
            <OfferList
              text="Ejercicio de coordinación motriz"
              status="active"
            />
            <OfferList text="Creatividad y perseverancia" status="active" />
            <OfferList text="Eventos locales" status="active" />
            <OfferList text="Clases en CARPS" status="active" />
            <OfferList
              text="Durante el primer mes se le prestan todos los implementos"
              status="active"
              classText="text-navBurger"
            />
          </PricingBox>

          <PricingBox
            packageName="Pro"
            price={isMonthly ? "70" : "540"}
            promo={"¡PROMOCIÓN POR WEB S/60.00!"}
            duration={isMonthly ? "clase" : ""}
            subtitle={
              isMonthly
                ? "Alcanza tu máximo potencial junto a nosotros."
                : "Paquete por 12 clases: Entrenamiento pro."
            }
          >
            <OfferList text="3 sesiones semanales" status="active" />
            <OfferList text="Plan personalizado y grupal" status="active" />
            <OfferList text="Implementos profesionales" status="active" />
            <OfferList
              text="Preparación física y elasticidad motriz"
              status="active"
            />
            <OfferList
              text="Técnicas avanzadas y explosión muscular"
              status="active"
            />
            <OfferList text="Preparación competitiva" status="active" />
            <OfferList text="Competencias nacionales" status="active" />
            <OfferList
              text="Durante el primer mes se le prestan todos los implementos"
              status="active"
              classText="text-navBurger"
            />
          </PricingBox>

          <PricingBox
            packageName="Carps Pro"
            price={isMonthly ? "80" : "280"}
            promo={"¡PROMOCIÓN POR WEB S/70.00!"}
            duration={isMonthly ? "clase" : ""}
            subtitle={
              isMonthly
                ? "Implementa tu nivel pro skater."
                : "Paquete por 4 clases: Ideal para empezar."
            }
          >
            <OfferList text="1 sesión semanal" status="active" />
            <OfferList text="Implementos profesionales" status="active" />
            <OfferList text="Clases intensivas" status="active" />
            <OfferList text="Superación y autoestima" status="active" />
            <OfferList text="Cultura skate" status="active" />
            <OfferList text="Desarrollo de vínculos sociales" status="active" />
            <OfferList
              text="Durante el primer mes se le prestan todos los implementos"
              status="active"
              classText="text-navBurger"
            />
          </PricingBox>

          <PricingBox
            packageName=""
            showPrice={true}
            price={isMonthly ? "Alquiler o eventos" : "Alquiler o eventos"}
            promo={"COTIZA AQUI"}
            duration={""}
            subtitle={
              isMonthly
                ? "Celebra con nosotros."
                : "Celebra con nosotros."
            }
          >
            <OfferList text="1 sesión semanal" status="active" />
            <OfferList text="Implementos profesionales" status="active" />
            <OfferList text="Clases intensivas" status="active" />
            <OfferList text="Superación y autoestima" status="active" />
            <OfferList text="Cultura skate" status="active" />
            <OfferList text="Desarrollo de vínculos sociales" status="active" />
            <OfferList
              text="Durante el primer mes se le prestan todos los implementos"
              status="active"
              classText="text-navBurger"
            />
          </PricingBox>

          <div id="products"></div>
        </div>
      </div>

      <div className="mt-16 w-full bg-gradientDark dark:bg-gray-800 p-8 shadow-lg">
        <div className="container">
          <h3 className="text-3xl font-bold mb-4 text-center text-white font-dreadful md:text-[50px]">
            Implementos a la Venta
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-white p-4 rounded-md">
              <div className="flex flex-col  gap-1">
                <div className="self-center mr-8">
                  <Image
                    height={70}
                    width={70}
                    src={"/images/protectores-basic.png"}
                    alt={"protectores"}
                  />
                </div>
                <h4 className="font-bold mb-2 text-2xl">
                  Kit Completo de Protecciones
                </h4>
              </div>
              <p>Rodilleras, coderas y muñequeras</p>
              <p className="font-semibold mt-2">Precio: S/350</p>
            </div>
            <div className="text-white p-4 rounded-md">
            <div className="flex flex-col  gap-1">
                <div className="self-center mr-8 p-1">
                  <Image
                    height={60}
                    width={60}
                    src={"/images/casco.png"}
                    alt={"protectores"}
                  />
                </div>
                <h4 className="font-bold mb-2 text-2xl">
                  Casco Pro Protec
                </h4>
              </div>
              <p>Protección de calidad profesional</p>
              <p className="font-semibold mt-2">Precio: S/250</p>
            </div>
            <div className="text-white p-4 rounded-md">
            <div className="flex flex-col  gap-1">
                <div className="self-center mr-8 p-1">
                  <Image
                    height={40}
                    width={60}
                    src={"/images/patineta.png"}
                    alt={"protectores"}
                  />
                </div>
                <h4 className="font-bold mb-2 text-2xl">
                  Skate Pro Completo
                </h4>
              </div>
              <p>
                Equipo profesional para tu entrenamiento, piezas originales.
              </p>
              <p className="font-semibold mt-2">Precio: S/650</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
