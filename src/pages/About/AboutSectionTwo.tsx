import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 bg-[#2f76b4]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-end">
          <div className="w-full px-4 md:w-2/3">
            <div className="w-full">
              <div className="mb-9">
                <h2 className="mb-4 text-whitemb-4 text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[45px]">
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
              <div className="mb-12 flex gap-8 px-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <div className="HcOXKn SxM0TO QxJLC3 comp-kpql7zd5 wixui-rich-text">
                    <h2 className="text-2xl font-bold !leading-tight text-white">
                      Fraco Ruiz
                    </h2>
                  </div>
                  <div className="HcOXKn SxM0TO QxJLC3 comp-kpql9p9a wixui-rich-text">
                    <p className="text-base font-medium leading-relaxed text-white">
                      Fundador & Instructor
                      <br className="wixui-rich-text__text" />
                      Peru Skateboarder del año 2017
                      <br className="wixui-rich-text__text" />
                      Entrenador Profesional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/3 mb-0">
            <div className="relative mx-auto md:mr-0 overflow-hidden">
              <div className="bottom-0 w-full ">
                <div className="w-8/12 mx-auto">
                  <Image
                    src="/images/about/about-board.png"
                    alt="about image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="drop-shadow-three sm:block hidden md:mr-0"
                  />
                </div>
                <div className="w-5/12 mx-auto md:hidden -mb-8">
                  <Image
                    src="/images/about/about-board-small.png"
                    alt="about image"
                    layout="responsive"
                    width={500}
                    height={500}
                    className="drop-shadow-three mx-auto  max-w-full md:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
