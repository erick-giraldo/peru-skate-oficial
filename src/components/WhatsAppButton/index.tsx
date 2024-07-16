import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

export default function WhatsAppButton() {
  return (
    <FloatingWhatsApp  
    accountName="Perú Skate" 
    phoneNumber="*51945970045"
    chatMessage="Hola somos Perú Skate, en que podemos ayudarte?"
    placeholder="Escribe un mensaje... "
    />
  );
};


