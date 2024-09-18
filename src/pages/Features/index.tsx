import featuresData from "@/lib/Features/featuresData";
import SectionTitle from "../Common/SectionTitle";
import SingleFeature from "@/lib/Features/SingleFeature";


export default function Features (){
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            width="fit-content"
            mb="50px"
            title="Skateboarding a Tu Medida"
            paragraph="Nuestro proceso de enseñanza es 100% divertido y se adapta completamente a tu ritmo. Te proporcionamos todos los implementos necesarios para que comiences tus primeras clases sin preocupaciones. Las sesiones se llevan a cabo principalmente en los skateparks de San Borja, Miraflores y La Molina. También ofrecemos clases personalizadas en parques o a domicilio, previa reserva, con opciones tanto grupales como individuales, según tus necesidades."
            center
            fontTitle='font-dreadful'
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};