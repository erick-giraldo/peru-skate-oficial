import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 bg-[#2f76b4]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-end">
          <div className="w-full px-4 lg:w-2/3">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Quienes somos
                </h2>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  La escuela de skate Young Guns fue fundada por el skater
                  profesional Simon Thorp en 2010. Junto con un equipo de los
                  mejores skaters de Nueva Zelanda, brindamos clases de skate
                  profesional y oportunidades al creciente número de jóvenes
                  interesados ​​en el skate. Los beneficios de nuestras clases
                  incluyen desarrollo de confianza y autoestima, mejor
                  equilibrio, coordinación y mejor comportamiento dentro y fuera
                  de la escuela. Además, los niños aprenden a divertirse sobre
                  una patineta. Desde 2010 hemos impartido más de 6.000 clases
                  con la asistencia de más de 100.000 Young Guns.
                </p>
              </div>
              <div className="mb-12">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Next.js
                </h3>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt
                  consectetur adipiscing elit setim.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/3 flex justify-center">
            <div>
              <Image
                src="/images/about/about-board.png"
                alt="about image"
                width={100}
                height={280}
                className="drop-shadow-three"
              />
              <Image
                src="/images/about/about-board-small.png"
                alt="about image"
                fill
                className="hidden drop-shadow-three sm:block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
