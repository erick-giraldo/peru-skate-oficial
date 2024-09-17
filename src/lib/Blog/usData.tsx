import { Blog } from "@/components/types/blog";

const usData: Blog[] = [
  {
    id: 1,
    title: "Cesar Ruiz Diaz: Maestro en Técnicas Básicas y Avanzadas",
    paragraph:
      "Cesar es un instructor altamente calificado en skateboarding, conocido por su habilidad para enseñar tanto técnicas básicas como avanzadas. Su enfoque meticuloso y su capacidad para adaptar las lecciones a diferentes niveles de habilidad aseguran que todos los estudiantes, sin importar su experiencia, puedan mejorar rápidamente.",
    image: "/images/blog/cesar_ruiz_2.png",
    author: {
      name: "Cesar Ruiz Diaz",
      image: "/images/blog/cesar_ruiz_diaz.jpg",
      designation: "Instructor",
    },
    // tags: ["skateboarding", "técnicas"],
    publishDate: "2012",
  },
  {
    id: 2,
    title: "Franco Ruiz Diaz: Experto en Desarrollo de Habilidades Técnicas",
    paragraph:
      "Franco es un experto en skateboarding con una profunda comprensión de las técnicas técnicas avanzadas. Su habilidad para desglosar y enseñar habilidades complejas hace que cada sesión sea efectiva y valiosa, permitiendo a los estudiantes perfeccionar sus técnicas y desarrollar su estilo personal.",
    image: "/images/blog/franco_ruiz_diaz_2.png",
    author: {
      name: "ranco Ruiz Diaz",
      image: "/images/blog/franco_ruiz_diaz.jpg",
      designation: "Instructor",
    },
    //tags: ["skateboarding", "habilidades"],
    publishDate: "2012",
  },
  {
    id: 3,
    title: "Jorge Dioses Arco: Especialista en Entrenamiento Personalizado",
    paragraph:
      "Jorge es conocido por su enfoque personalizado en el entrenamiento de skateboarding. Su habilidad para diseñar programas de entrenamiento específicos y adaptados a las necesidades individuales de cada estudiante asegura un progreso constante y una mejora significativa en las habilidades de skateboarding.",
    image: "/images/blog/jorge_dioses_2.png",
    author: {
      name: "Jorge Dioses Arco",
      image: "/images/blog/jorge_dioses_arco.png",
      designation: "Instructor",
    },
    //tags: ["skateboarding", "entrenamiento"],
    publishDate: "2012",
  },
];
export default usData;
