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
    <div className="w-full bg-white flex flex-col gap-10 p-10 sm:p-20 lg:px-40 ">
      <div className="flex flex-col justify-center gap-4">
        <p className="text-left p-0 text-medium font-sans w-fit text-black ">
          Our journey in pictures. Explore highlights from past events and
          district gatherings.
        </p>
        <h3 className=" p-0 w-fit text-primary font-mono font-semibold text-1xl sm:text-3xl ">
          Our Gallery
        </h3>
      </div>
      {/* <Carousel>
        <CarouselContent className="gap-10 sm:gap-20">
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="ICAN Award & Dinner" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="ICAN Award & Dinner" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
          <CarouselItem className="min-w-fit basis-auto">
            <Imgcard title="ICAN Award & Dinner" imgurl="/galleryfiller.jpg" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel> */}


<div className="relative basis-full">
        <Carousel>
          <CarouselContent>
            <CarouselItem className="basis-full">
              <div className="grid grid-cols-2 sm:grid-col-1 md:gird-col-1 gap-32">
                <Imgcard 
                  title="ICAN Award & Dinner" 
                  imgurl="/galleryfiller.jpg" 
                />
                <Imgcard 
                  title="ICAN Award & Dinner" 
                  imgurl="/galleryfiller.jpg" 
                />
              </div>
            </CarouselItem>
            <CarouselItem className="basis-full ">
              <div className="grid grid-cols-2 gap-32">
                <Imgcard 
                  title="ICAN Award & Dinner" 
                  imgurl="/galleryfiller.jpg" 
                />
                <Imgcard 
                  title="ICAN Award & Dinner" 
                  imgurl="/galleryfiller.jpg" 
                />
              </div>
            </CarouselItem>
          </CarouselContent>
          <div className="absolute -left-4 top-1/2 -translate-y-1/2">
            <CarouselPrevious className="h-12 w-10 bg-grey shadow-lg hover:bg-gray-50 rounded-none" />
          </div>
          <div className="absolute -right-4 top-1/2 -translate-y-1/2">
            <CarouselNext className="h-12 w-10 bg-primary text-white hover:bg-primary/90 rounded-none" />
          </div>
        </Carousel>
      </div>

    </div>
  );
}

export default Gallery;
