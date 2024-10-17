import CarpsSkate from "@/components/carps";

const Carps = () => {
    const title = "Centro de Alto Rendimiento Perú Skate CARPS";
    const description = `
      Teniendo en cuenta los grandes beneficios del skateboarding para niños, jóvenes y adultos, como la mejora en la coordinación,
      resistencia y fuerza, así como el fomento de la autoestima y el control emocional, PerúSkate ha creado el CARPS, el único lugar
      disponible al público para desarrollar el máximo potencial en este deporte mientras se evitan lesiones.
    `;
    const benefits = [
      "Mejora la coordinación, resistencia y fuerza.",
      "Aumenta la autoestima, el control emocional y la conducta.",
      "Fomenta el trabajo en equipo y el respeto a la comunidad.",
      "Espacio seguro para evitar lesiones, gracias a materiales livianos como la madera.",
      "Desarrolla velocidad de reacción y fluidez en el skateboarding."
    ];
    const leftImage = "/images/carps.jpeg";
    const rightImage = "/images/carps2.jpeg";
  
    return (
      <div>
        <CarpsSkate 
          title={title} 
          description={description} 
          benefits={benefits} 
          leftImage={leftImage}
          rightImage={rightImage}
        />
      </div>
    );
  };

export default Carps;
