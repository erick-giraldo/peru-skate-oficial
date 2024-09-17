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
            mb="20px"
            title="Skateboarding a Tu Medida"
            paragraph="El proceso del aprendizaje es 100% divertido, vamos a tu ritmo, te brindamos todos los implementos para tus primeras clases. Las clases son dictadas principalmente en los skateparks de San Borja, Miraflores y la Molina. Tambien brindamos clases personalizadas en parques o/a domicilio previa reservación (BOTON DE INSCRIBIRSE), pueden ser en grupo o personalizado."
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