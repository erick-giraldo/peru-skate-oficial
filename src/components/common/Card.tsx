import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface CardProps {
  image: string;
  title: string;
  sub: string;
  description: string;
  address: string
}

const Card: React.FC<CardProps> = ({ image, title, sub, address }) => {
  return (
    <div className="relative max-w-xs sm:max-w-sm lg:max-w-md xl:max-w-lg shadow-md overflow-hidden group">
      <div className="overflow-hidden">
        <Image
          width={373}
          height={503}
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-[#f56256] p-4 sm:p-5 text-white text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex flex-col justify-center opacity-0 group-hover:opacity-90 z-10">
        <div className="flex flex-col gap-3">
          <h4 className="text-lg sm:text-xl font-bold">{title}</h4>
          <h5 className="text-sm sm:text-md font-semibold">{sub}</h5>
          <p className="text-xs sm:text-sm">
            <i className="fa fa-home" aria-hidden="true"></i> {address}
          </p>
          <Button
            variant="skt"
            size="default"
            className="rounded-full border-none"
          >
            Know more
          </Button>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-[#f56256] p-2 sm:p-3 text-white flex items-center justify-center z-20 group-hover:hidden">
        <div className="flex flex-col">
          <h4 className="text-xs sm:text-sm lg:text-base font-bold">{title}</h4>
          <h5 className="text-xs sm:text-sm font-semibold">{sub}</h5>
        </div>
      </div>
    </div>
  );
};

export default Card;