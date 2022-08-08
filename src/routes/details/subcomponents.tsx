import styled from 'styled-components'
import { themes } from 'themes'

export const DetailContainer = styled.div<{ loading: boolean }>`
  margin-top: 10% !important;
  display: flex;
  flex-direction: column;
  justify-content: ${(p) => (p.loading ? 'center' : 'space-between')};
  border-radius: 12px;
  align-items: center;
  margin: 0 auto;
  width: 300px;
  height: 400px;
  background-color: ${themes.grayRGBA};
  padding: 20px 0;
`
export const DetailImage = styled.img`
  width: 90%;
  height: 50%;
  object-fit: fill;
`
