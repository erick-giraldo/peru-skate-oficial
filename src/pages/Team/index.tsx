import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import usData from "@/lib/Blog/usData";


export default function Team() {
  return (
    <section  id="us" className="py-12 md:py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto px-4">
        <SectionTitle
          width="fit-content"
          mb="50px"
          title="Sobre Nosotros"
          paragraph="Somos la comunidad líder y centro educativo en skateboarding. Nuestros instructores están certificados por ISCP (Programa Internacional de Certificación de Patinetas), SKATZ (Postura, Patadas, Ejes, Transferencias y Zen), y FDNPP (Federación Deportiva Nacional Peruana de Patinaje)."
          //paragraphBottom="Descubre a nuestros instructores expertos"
          center
          fontTitle='font-dreadful'
        />
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {usData.map((instructor) => (
            <div key={instructor.id} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="relative w-full h-96 mx-auto mb-4">
                <Image
                  src={instructor.image}
                  alt={instructor.title}
                  layout="fill"
                  objectFit="cover"
                  className="mx-auto"
                />
              </div>
              <div className="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">
              <h3 className="pointer-events-none mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">{instructor.title}</h3>
              <p className="text-gray-700">{instructor.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

