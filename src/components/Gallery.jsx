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
    <div className="w-full bg-green-100 flex flex-col gap-10 p-12 sm:p-20 lg:p-40 ">
      <div className="flex flex-col justify-center gap-4 text-center items-center">
        <p className=" p-0 text-sm font-sans w-fit text-black ">
          Our journey in pictures. Explore highlights from past events and
          district gatherings.
        </p>
        <h3 className=" p-0 w-fit text-primary font-mono font-semibold text-2xl sm:text-5xl ">
          Our Gallery
        </h3>
      </div>
      <Carousel>
        <CarouselContent className="gap-10 sm:gap-20">
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
