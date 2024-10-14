import React from "react";
import Slider from "react-slick";
import Card from "./Card";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface CarouselProps {
  items: { image: string; title: string; sub: string; description: string, address: string }[];
}

const CustomCarousel: React.FC<CarouselProps> = ({ items }) => {
  const settings = {
    infinite: true,
    autoplay: true,
    speed: 500,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="relative w-full mx-auto">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className="px-2 sm:px-3 md:px-4">
            <Card
              image={item.image}
              title={item.title}
              sub={item.sub}
              description={item.description}
              address={item.address}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const NextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="absolute right-4 top-1/2 -mt-5 bg-[#38435c] rounded-full cursor-pointer w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <ChevronRightIcon className="w-6 h-6 text-white" />
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className="z-10 absolute left-4 top-1/2 -mt-5 bg-[#38435c] rounded-full cursor-pointer w-10 h-10 flex items-center justify-center"
      onClick={onClick}
    >
      <ChevronLeftIcon className="w-6 h-6 text-white" />
    </div>
  );
};

export default CustomCarousel;