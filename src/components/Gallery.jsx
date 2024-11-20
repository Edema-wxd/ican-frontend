import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Imgcard from "./genui/Imgcard";

function Gallery() {
  return (
    <div className=" bg-white flex flex-col gap-10 p-20">
      <div className="flex flex-col justify-start text-left items-start">
        <p className=" p-0 text-sm  w-fit text-black ">
          Our journey in pictures. Explore highlights from past events and
          district gatherings.
        </p>
        <h3 className=" p-0 w-fit text-primary font-['Saprtan'] font-semibold text-5xl ">
          Our Gallery
        </h3>
      </div>
      <Carousel>
        <CarouselContent className="">
          <CarouselItem className="basis-1/3">
            <Imgcard />
          </CarouselItem>
          <CarouselItem>
            <Imgcard />
          </CarouselItem>
          <CarouselItem>
            <Imgcard />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Gallery;
