import React from "react";
import Image from "next/image";

const Loading: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="flex flex-col items-center">
        <Image
          src="/images/logo/logo-black.png" // Reemplaza con la ruta de tu logo
          alt="Loading"
          width={150} // Ajusta el tamaño según tus necesidades
          height={150}
          className="animate-spin-side" // Clase de animación Tailwind añadida
        />
      </div>
    </div>
  );
};

export default Loading;
