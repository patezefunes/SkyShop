import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CarouselContainer = styled.div`
  cursor: grab;
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;

  @media (max-width: 1060px){
    width: 800px;
  }

  @media (max-width: 860px){
    width: 600px;
  }

  @media (max-width: 660px){
    width: 280px;
  }
`

export const InnerCarousel = styled(motion.div)`
  display: flex;
`
