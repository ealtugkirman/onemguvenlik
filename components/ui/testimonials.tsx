"use client"

import { useEffect, useState } from "react"
import { Carousel, type CarouselApi, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export interface TestimonialItem {
  title: string
  content: string
  author: {
    name: string
    title: string
    image?: string
    initials?: string
  }
}

interface TestimonialsProps {
  title?: string
  items: TestimonialItem[]
}

function Testimonials({ title = "Müşterilerimiz Ne Diyor?", items }: TestimonialsProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    const intervalId = setInterval(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0)
        api.scrollTo(0)
      } else {
        api.scrollNext()
        setCurrent(current + 1)
      }
    }, 5000)

    return () => clearInterval(intervalId)
  }, [api, current])

  return (
    <div className="w-full py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter font-bold text-center mb-4">{title}</h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {items.map((item, index) => (
                <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={index}>
                  <div className="bg-white rounded-lg shadow-md h-full p-6 flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1 text-blue-700 mb-4" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl font-semibold tracking-tight mb-2">{item.title}</h3>
                        <p className="text-gray-600 text-base">{item.content}</p>
                      </div>
                      <div className="flex items-center gap-3 mt-4 pt-4 border-t border-gray-100">
                        <Avatar className="h-10 w-10">
                          {item.author.image ? (
                            <AvatarImage src={item.author.image || "/placeholder.svg"} alt={item.author.name} />
                          ) : null}
                          <AvatarFallback>{item.author.initials || item.author.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="font-medium">{item.author.name}</span>
                          <span className="text-sm text-gray-500">{item.author.title}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
          <div className="flex justify-center gap-2 mt-6">
            {items.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full transition-colors ${
                  current === index ? "bg-blue-700" : "bg-gray-300"
                }`}
                onClick={() => {
                  api?.scrollTo(index)
                  setCurrent(index)
                }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { Testimonials }
