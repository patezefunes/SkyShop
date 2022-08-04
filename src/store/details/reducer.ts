import { createSlice } from '@reduxjs/toolkit'
import requestData from './actions'
import { DetailState, RequestDetailResponse } from './typings'

const initialState: DetailState = {
  detailResponse: null,
  detailError: null,
  loading: false,
}
const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(requestData.pending, (state: DetailState) => {
        state.loading = true
      })
      .addCase(requestData.fulfilled, (state: DetailState, { payload }) => {
        state.loading = false
        state.detailResponse = payload as RequestDetailResponse
      })
      .addCase(requestData.rejected, (state: DetailState, { payload }) => {
        state.loading = false
        state.detailError = payload
      })
  },
})

export default detailSlice.reducer
