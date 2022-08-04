import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CarouselContainer = styled.div`
  cursor: grab;
  overflow: hidden;
  margin: 0 auto;
  width: 1000px;
`

export const InnerCarousel = styled(motion.div)`
  display: flex;
`
