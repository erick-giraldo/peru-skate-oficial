import React from "react";
import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";
import usData from "@/lib/Blog/usData";

export default function Team() {
  return (
    <section id="us" className="py-12 md:py-20 lg:py-28 bg-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          width="max-w-3xl"
          mb="50px"
          title="Sobre Nosotros"
          paragraph="Somos la comunidad líder y centro educativo en skateboarding. Nuestros instructores están certificados por ISCP (Programa Internacional de Certificación de Patinetas), SKATZ (Postura, Patadas, Ejes, Transferencias y Zen), y FDNPP (Federación Deportiva Nacional Peruana de Patinaje)."
          center
          fontTitle="font-dreadful"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {usData.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-0 pb-[75%]">
                <Image
                  src={instructor.image}
                  alt={instructor.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
              </div>
              <div className="p-6 flex-grow">
                <h3 className="mb-4 text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl">
                  {instructor.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">{instructor.paragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}