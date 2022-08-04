import { motion } from 'framer-motion'
import styled from 'styled-components'

export const CarouselItemContainer = styled(motion.div)`
  padding: 10px;
  min-width: 33%;
  height: 300px;
  display: flex;
  position: static;
  flex-direction: column;
`

export const CarouselImage = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  pointer-events: none;
`
