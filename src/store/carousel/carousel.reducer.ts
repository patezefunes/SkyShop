import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarouselType } from './carousel.types'

const initialState: CarouselType = {
  selectedCountry: '',
}
const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setTitle(state: CarouselType, action: PayloadAction<string>) {
      state.selectedCountry = action.payload
    },
  },
})

export const carouselActions = carouselSlice.actions
export default carouselSlice.reducer
