import React from "react";
import { ChevronRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarpsSkateProps {
  title: string;
  subTitle: string;
  description: string;
  benefits: string[];
  leftImage: string;
  rightImage: string;
}

const CarpsSkate: React.FC<CarpsSkateProps> = ({
  title,
  subTitle,
  description,
  benefits,
  leftImage,
  rightImage,
}) => {
  const handleClick = () => {
    window.open("https://api.whatsapp.com/send/?phone=51945970045&text=🔥Deseo%20reservar%20una%20clase%20de%20prueba", "_blank"); // Cambia la ruta a la que deseas redirigir
  };
  return (
    <section className="bg-gradientCool text-white overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-4 md:px-8">
            <h2 className="text-center text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[50px] font-dreadful">
              {title}
            </h2>
            <h2 className="mb-4 text-center text-3xl font-bold !leading-tight text-white sm:text-4xl md:text-[60px] font-dreadful">
              {subTitle}
            </h2>
            <p className="text-lg mb-8">{description}</p>

            <div className="">
              <h3 className="text-2xl font-semibold mb-4 font-dreadful tracking-widest	">
                Beneficios del Skateboarding:
              </h3>
              <ul className="space-y-2">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <ChevronRight className="flex-shrink-0 w-5 h-5 text-green-400 mt-1 mr-2" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex justify-center">
              <Button
                onClick={handleClick}
                variant="default"
                //className="bg-[#28a745] h-12 text-base text-white font-bold py-3 px-8 rounded-full hover:bg-red-700 transition duration-300 transform hover:scale-105" 
                className="md:h-14 lg:px-8 h-12 md:px-4  w-60  md:w-80 rounded-full bg-[#f2f2f2] text-xs lg:text-base font-semibold text-black duration-300 ease-in-out hover:bg-[#f2f2f2]/80"
              >
                ¡Únete a CARPS!
              </Button>
            </div>
          </div>
          <div className="flex flex-col md:w-1/2 mt-8">
            <div className="w-full mt-8 md:mt-0">
                <img
                src={rightImage}
                alt="Skateboarder 2"
                className="w-full h-80 object-cover transform rotate-3 shadow-lg border-8  border-white"
              />
            </div>
            <div className="w-full mb-8 md:mb-0">
              <img
                src={leftImage}
                alt="Skateboarder 1"
                className="w-full h-80 object-cover transform -rotate-3 shadow-lg border-8 border-white"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarpsSkate;
