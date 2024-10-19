import CarpsSkate from "@/components/carps";

const Carps = () => {
    const title = "Centro de Alto Rendimiento PerúSkate";
    const subTitle = "- CARPS -"
    const description = `
      Teniendo en cuenta los grandes beneficios del skateboarding, PerúSkate ha creado CARPS, el único lugar
      disponible al público para desarrollar el máximo potencial en este deporte, el cual esta construido de madera para mayor amortiguación del impacto y asi evitar lesiones
    `;
    const benefits = [
      "Mejora la coordinación, resistencia y fuerza.",
      "Aumenta la autoestima, el control emocional y la conducta.",
      "Fomenta el trabajo en equipo y el respeto a la comunidad.",
      "Espacio seguro para evitar lesiones, gracias a materiales livianos como la madera.",
      "Desarrolla velocidad de reacción y fluidez en el skateboarding."
    ];
    const leftImage = "/images/carps2.jpeg";
    const rightImage = "/images/carps.jpg";
  
    return (
      <div>
        <CarpsSkate 
          title={title}
          subTitle={subTitle}
          description={description} 
          benefits={benefits} 
          leftImage={leftImage}
          rightImage={rightImage}
        />
      </div>
    );
  };

export default Carps;
