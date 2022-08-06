import styled from 'styled-components'
import { themes } from '../../themes'
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin-top: 100px;
`
export const SliderContainer = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  z-index: 1;
`

export const SliderTitle = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  height: 500px;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;
  font-weight: bold;
  width: 50%;
  border-radius: 64px;
  padding: 1rem 0;
  box-shadow: 2px 2px 2px 1px rgba(66, 74, 67, 0.2);
  background-color: ${themes.lightgreenRGBA};

  @media (max-width: 720px) {
    font-size: 1.5rem;
    width: 80%;
  }
`

export const SliderTitleInfo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  width: 80%;
  height: 80px;
  background-color: ${themes.gray};
  color: ${themes.white};
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 48px;
  border-bottom-right-radius: 48px;
  cursor: pointer;

  &:hover {
    color: ${themes.blue};
  }
`
