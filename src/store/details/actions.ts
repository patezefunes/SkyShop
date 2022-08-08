import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchDetails } from 'utils/fetchDetails'
import { CountryId, DetailError, DetailReturnType } from './typings'

const requestData = createAsyncThunk<
  DetailReturnType,
  CountryId,
  { rejectValue: DetailError }
>('details/fetchDetails', async (countryId, { rejectWithValue }) => {
  try {
    const response = await fetchDetails(countryId)

    const { name, capital, flagImageUri } = response.data

    console.log('Response is: ' + name)

    return { name, capital, flagImageUri } as DetailReturnType
  } catch (error) {
    console.log('Redux tiro error')
    return rejectWithValue(error)
  }
})

export default requestData
