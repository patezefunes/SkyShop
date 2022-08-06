import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CarouselType } from './carousel.types'

const initialState: CarouselType = {
  selectedCountry: '',
  countryId: '',
}
const carouselSlice = createSlice({
  name: 'carousel',
  initialState,
  reducers: {
    setTitle(state: CarouselType, action: PayloadAction<CarouselType>) {
      state.selectedCountry = action.payload.selectedCountry
      state.countryId = action.payload.countryId
    },
  },
})

export const carouselActions = carouselSlice.actions
export default carouselSlice.reducer
