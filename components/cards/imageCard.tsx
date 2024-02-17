'use client'

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function ImageCard() {
  return (
    <div className="">
      <Carousel className="max-w-xs">
        <CarouselContent className="">
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/564x/3a/93/20/3a9320879163ceff6e20950a130a9b33.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/564x/b2/25/3b/b2253b41ee35f0b75547004edb28146d.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/564x/fe/cf/5f/fecf5f37c625ca8947681fa0ec8ca51f.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/564x/57/ca/3d/57ca3d596a01e12f79deba7637f79bb7.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/564x/c1/b6/0f/c1b60f62a57d2a286a77a0dfdc191b25.jpg"></img>
            </div>
          </CarouselItem>
          <CarouselItem className="">
            <div className="rounded-lg text-card-foreground">
              <img className="rounded-lg object-cover h-36 w-full md:max-w-xs" src="https://i.pinimg.com/originals/61/8f/08/618f083c61a7460ce0a6064319af41bd.gif"></img>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute mt-[50px] ml-[80px]" />
        <CarouselNext className="absolute mt-[50px] mr-[250px]" />
      </Carousel>
    </div>
  )
}