import CustomCarousel from "@/components/common/Carousel";

export default function Carousel() {
  const items = [
    {
      image: "/images/events/eve1.jpg",
      title: "Skaters Competiton",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
    {
      image: "/images/events/eve2.jpg",
      title: "Imagen 2",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
    {
      image: "/images/events/eve3.jpg",
      title: "Imagen 3",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
    {
      image: "/images/events/eve4.jpg",
      title: "Imagen 4",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
    {
      image: "/images/events/eve5.jpg",
      title: "Imagen 5",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
    {
      image: "/images/events/eve6.jpg",
      title: "Imagen 6",
      sub: "23 April 2017",
      description: "Descripción de la imagen 1",
    },
  ];
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <h2 className="mb-4 text-3xl font-bold !leading-tight text-black dark:text-white sm:text-4xl md:text-[45px]">
          Nuestros eventos{" "}
        </h2>
        <CustomCarousel items={items} />
      </div>
    </section>
  );
}
