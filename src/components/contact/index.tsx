import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface ContactModuleProps {
  phone: string;
  email: string;
  address: string;
  mapSrc: string;
}

const ContactModule: React.FC<ContactModuleProps> = ({
  phone,
  email,
  address,
  mapSrc,
}) => {
  return (
    <section id="contact" className="bg-gray-100 text-gray-800 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 px-4 md:px-8 space-y-6">
            <h2 className="text-center text-3xl font-bold !leading-tight sm:text-4xl md:text-start md:text-[50px] font-dreadful">
              Contáctanos
            </h2>
            <div className="flex items-center space-x-4">
              <Phone className="w-6 h-6 text-blue-600" />
              <span className="text-lg">{phone}</span>
            </div>
            <div className="flex items-center space-x-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <span className="text-lg">{email}</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="w-6 h-6 text-blue-600" />
              <span className="text-lg">{address}</span>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0">
            <iframe
              src={mapSrc}
              title="Mapa de Ubicación"
              className="w-full h-80 rounded-lg shadow-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactModule;
