import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="pt-16 md:pt-20 lg:pt-28 bg-[#2f76b4]">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-2/3">
            <div className="w-full">
              <div className="mb-9">
                <h2 className="mb-4 text-3xl !leading-tight text-white sm:text-4xl md:text-[55px] font-dreadful">
                Nuestra Historia
                </h2>
                <p className="text-base font-medium leading-relaxed text-white sm:text-lg sm:leading-relaxed">
                  En 2012, tres apasionados del skateboarding unieron sus
                  fuerzas para fundar nuestra escuela, con el objetivo de
                  impulsar el talento local y elevar el nivel de este deporte en
                  Perú. Certificados por ISCP, SKATZ y la FDNPP, nuestros
                  instructores no solo son expertos, sino también campeones en
                  las categorías Amateur, Open y Pro. A lo largo de los años,
                  hemos cosechado múltiples premios en competencias de alto
                  nivel como el VANS Pro, el Converse Championship y el Circuito
                  Nacional de Bowl, consolidando a nuestra escuela como un
                  referente en la escena del skateboarding. Más allá de los
                  trofeos, nuestra misión es formar a la próxima generación de
                  riders, enseñando no solo trucos, sino también valores de
                  disciplina, perseverancia y trabajo en equipo. Hoy, seguimos
                  forjando campeones, donde cada truco refleja la pasión por el
                  deporte y el deseo de superación.
                </p>
              </div>
              <div className="mb-12 flex gap-8 px-4">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
                <div>
                  <div className="HcOXKn SxM0TO QxJLC3 comp-kpql7zd5 wixui-rich-text">
                    <h2 className="text-2xl font-bold !leading-tight text-white">
                      Franco Ruiz
                    </h2>
                  </div>
                  <div className="HcOXKn SxM0TO QxJLC3 comp-kpql9p9a wixui-rich-text">
                    <p className="text-base font-medium leading-relaxed text-white">
                      Fundador e Instructor
                      <br className="wixui-rich-text__text" />
                      Entrenador Profesional en Peru Skate desde 2012
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
