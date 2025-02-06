'use client'

import { CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from "react"
import Image from "next/image"

interface Testimonial {
  id: number
  feedback: string
  client: string
  role: string
  avatar: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="container relative w-full h-full flex flex-wrap">
      <div className="bg-[#141414] rounded-xl w-full h-full flex flex-col sm:flex-row">
        <CardContent className="flex flex-col justify-center h-full w-full sm:w-auto">
          {/* Review Text */}
          <blockquote className="text-sm xl:text-sm lg:text-sm lg:mb-1 md:text-sm sm:text-sm italic text-zinc-300 mb-4 sm:mb-6">
            &quot;{testimonials[currentIndex].feedback}&quot;
          </blockquote>

          {/* Slider Buttons */}
          <div className="flex justify-between gap-2 sm:gap-4 mb-4 sm:mb-6">
            <Button
              variant="secondary"
              onClick={previous}
              className="bg-[#212121] hover:bg-zinc-900 p-2 sm:p-3"
            >
              <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
            <Button
              variant="secondary"
              onClick={next}
              className="bg-[#212121] hover:bg-zinc-900 p-2 sm:p-3"
            >
              <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
            </Button>
          </div>

          {/* Client Info */}
          <div className="flex items-center flex-row">
            <div className="mr-2 sm:mr-4">
              <Image
                src={testimonials[currentIndex].avatar}
                alt={testimonials[currentIndex].client}
                width={50}
                height={50}
                className="rounded-full w-22 h-22 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 sm:w-26 sm:h-26"
              />
            </div>
            <div className="text-left sm:text-left">
              <div className="text-lg sm:text-lg font-bold text-white">{testimonials[currentIndex].client}</div>
              <div className="text-sm sm:text-sm text-zinc-400">{testimonials[currentIndex].role}</div>
            </div>
          </div>
        </CardContent>
      </div>
    </div>
  )
}
