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

  // Gallery component containing a carousel and image cards based on usage, Add specs for dynamic usage w apis
  return (
    <div className="w-full bg-white flex flex-col gap-10 p-20">
      <div className="flex flex-col justify-start text-left items-start">
        <p className=" p-0 text-sm font-sans w-fit text-black ">
          Our journey in pictures. Explore highlights from past events and
          district gatherings.
        </p>
        <h3 className=" p-0 w-fit text-primary font-mono font-semibold text-5xl ">
          Our Gallery
        </h3>
      </div>
      <Carousel>
        <CarouselContent className="gap-20">
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="Hot Eba" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="Hot Eba" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="Hot Eba" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default Gallery;