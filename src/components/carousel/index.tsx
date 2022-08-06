import { FC, useEffect, useRef, useState } from 'react'
import { CarouselDataType } from './types'
import CarouselItem from '../carousel-item'
import { CarouselContainer, InnerCarousel } from './subcomponents'

const Carousel: FC<CarouselDataType> = ({ data }) => {
  const [width, setWidth] = useState<number>(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<string | null>(null)
  const handleSelect = (id: string) => {
    if (id === selected) setSelected(null)
    else setSelected(id)
  }

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }
  }, [])
  return (
    <CarouselContainer>
      <InnerCarousel
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        ref={carousel}
      >
        {data.map((item) => (
          <CarouselItem
            key={item.countryId}
            name={item.name}
            image={item.image}
            countryId={item.countryId}
            handleSelection={handleSelect}
            selected={selected === item.countryId ? true : false}
          />
        ))}
      </InnerCarousel>
    </CarouselContainer>
  )
}

export default Carousel
