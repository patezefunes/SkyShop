import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDetails } from 'utils/fetchDetails'
import { DetailError, DetailReturnType } from './typings'

const requestData = createAsyncThunk<
  DetailReturnType,
  null,
  { rejectValue: DetailError }
>('details/fetchDetails', async (resolve, { rejectWithValue }) => {
  try {
    const response = await fetchDetails()

    const { name, climate, population } = response

    console.log('Response is: ' + name)

    return { name, climate, population } as DetailReturnType
  } catch (error) {
    return rejectWithValue(error)
  }
})

export default requestData
