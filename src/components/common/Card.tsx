import React from "react";
import { Button } from "@/components/ui/button";

interface CardProps {
  image: string;
  title: string;
  sub: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ image, title, sub, description }) => {
  return (
    <div className="relative max-w-[373px] max-h-[503px] shadow-md overflow-hidden group">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-[#f56256] p-3 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center opacity-0 group-hover:opacity-90 z-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg text-center font-bold">{title}</h4>
          <h5 className="text-sm text-center font-bold">{sub}</h5>
          <p>
            <i className="fa fa-home" aria-hidden="true"></i> 86 West Street, IL
            60172
          </p>
          <p>
            <i className="fa fa-clock-o" aria-hidden="true"></i> 09:00 AM -
            06:30 PM
          </p>
          <Button
            variant="skt"
            size="default"
            className="rounded-full border-none"
          >
            know more
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#f56256] h-10 p-8 text-white flex items-center justify-center z-20 group-hover:hidden">
        <div className="flex flex-col">
          <h4 className="text-lg text-center font-bold">{title}</h4>
          <h5 className="text-sm text-center font-bold">{sub}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;
