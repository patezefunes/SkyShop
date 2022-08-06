import axios from 'axios'
import { apiHost, apiKey } from 'consts/apiKeys'

export const fetchDetails = async (id: string) => {
  console.log('Requesting for fetch')
  const response = await axios.get(
    `https://wft-geo-db.p.rapidapi.com/v1/geo/countries/${id}`,
    {
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': apiHost,
      },
    }
  )
  return response.data
}
