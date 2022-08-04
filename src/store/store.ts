import { configureStore } from '@reduxjs/toolkit'
import carouselReducer from './carousel/carousel.reducer'
import photosReducer from './photos/photos.reducer'
import detailsReducer from './details/reducer'
const store = configureStore({
  reducer: {
    photos: photosReducer,
    carousel: carouselReducer,
    details: detailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
