
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";

export const EmblaCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          <div className="embla__slide">
            <img src="https://balajiincense.com/cdn/shop/files/final_1024x1024.png?v=1630934510" className='w-full' alt="" />
          </div>
          <div className="embla__slide">
            <img src="https://balajiincense.com/cdn/shop/files/final_1_1024x1024.jpg?v=1631685075" className='w-full' alt="" srcset="" />

          </div>
          <div className="embla__slide">
            <img src="https://balajiincense.com/cdn/shop/files/final_1_1024x1024.jpg?v=1631685075" className='w-full' alt="" />

          </div>
        </div>
      </div>
      <div className="btn-cont px-8">
        <button className="embla__prev" onClick={scrollPrev}>
          <FaRegArrowAltCircleLeft className='text-3xl' />
        </button>
        <button className="embla__next" onClick={scrollNext}>
          <FaRegArrowAltCircleRight className='text-3xl' />
        </button>
      </div>
    </div>
  )
}