import ContactModule from "@/components/contact";
import { config } from "@/config";

const ContactPage = () => {
  return (
    <ContactModule
      phone="+51 947 353 650"
      email="contacto@peruskate.com"
      address="Calle Marquez de la Bula  MZ. 1 Huertos de Villa - Chorrillos, Lima"
      mapSrc={config.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}

    />
  );
};

export default ContactPage;